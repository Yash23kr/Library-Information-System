from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
import datetime
from .models import *
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from staff.models import Staff, Return_request
from librarian.models import StaffRequest
# Create your views here.
def register_member(request):
    if request.method == 'POST':
        username = request.POST.get('username', '')
        password1 = request.POST.get('password1', '')
        password2 = request.POST.get('password2', '')
        usertype = request.POST.get('usertype', '')
        email = request.POST.get('email_id', '')
        if password1 != password2:
            return render(request, 'member_registration.html', {'message': 'Password mismatch'})
        if len(User.objects.filter(username=username))!=0 or len(StaffRequest.objects.filter(username=username))!=0:
            return render(request, 'member_registration.html', {'message':'user already exists please login'})
        if len(User.objects.filter(email=email))!=0 or len(StaffRequest.objects.filter(email=email))!=0:
            return render(request, 'member_registration.html', {'message':'Email has already been used!'})
        user = User.objects.create_user(username=username,password=password1, email=email)
        member = Member.objects.create(user=user, user_type=usertype)
        user.save()
        member.save()
        return redirect('/member/login')
    return render(request, 'member_registration.html', {'message': ''})

def login_member(request):
    if request.method == 'POST':
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        user = authenticate(username=username, password=password)
        if user is None:
            return render(request, 'login.html', {'message':'incorrect username or password'})
        else:
            login(request,user)
            return redirect('/member/home')
    return render(request,'login.html',{'message':''} )


@login_required(login_url = '/member/login')
def home_member(request):
    try:
        request.user.member
    except Exception:
        return render(request,'error.html')
    return render(request, 'home.html',{'member':request.user.member})

@login_required(login_url = '/member/login')
def view_books(request):
    try:
        request.user.member
    except Exception:
        return render(request,'error.html')
    if request.method == 'POST':
        name=request.POST.get('search',"")
        sorttype=request.POST.get('sorttype','issue_freq')
        books = Book.objects.all().order_by(sorttype)
        filtered_books=[]
        for book in books:
            if name in book.name.lower():
                filtered_books.append(book)
        return render(request, 'view_books.html', {'books':filtered_books})
    books = Book.objects.all()
    books = books.order_by('issue_freq')
    return render(request, 'view_books.html', {'books':books})

@login_required(login_url = '/member/login')
def issue_book(request,book_id):
    try:
        request.user.member
    except Exception:
        return render(request,'error.html')
    book = Book.objects.get(id=book_id)
    member = request.user.member
    issued_books = member.book_set.all()
    if(member.user_type == 'UG'):
        if len(issued_books)== 2:
            messages.error(request, 'You have already reached the issue limit of 2 books')
            return redirect('/member/home')
    if(member.user_type == 'PG'):
        if len(issued_books)== 4:
            messages.error(request, 'You have already reached the issue limit of 2 books')
            return redirect('/member/home')
    if(member.user_type == 'RS'):
        if len(issued_books)== 6:
            messages.error(request, 'You have already reached the issue limit of 2 books')
            return redirect('/member/home')
    if(member.user_type == 'FAC'):
        if len(issued_books)== 10:
            messages.error(request, 'You have already reached the issue limit of 2 books')
            return redirect('/member/home')
    book.is_available = False
    book.issue_date = datetime.date.today().isoformat()
    book.last_issued = datetime.date.today().isoformat()
    book.is_returned = False
    member.book_set.add(book)
    book.issue_freq = book.issue_freq + 1
    member.save()
    book.save()
    #print(member.book_set.all())
    messages.success(request,'Book issued Successfully')
    return redirect('/member/home')

@login_required(login_url = '/member/login')
def reserve_book(request,book_id):
    try:
        request.user.member
    except Exception:
        return render(request,'error.html')
    book = Book.objects.get(id=book_id)
    member = request.user.member
    if book.issued_to == member:
        messages.error(request, "This book has already been issued to you")
        return redirect('/member/home')
    if member.reserved_book is not None:
        messages.error(request, "You have already reserved a book and are not eligible to issue another book")
        return redirect('/member/home')
    member.reserved_book = book
    member.reserved_time = datetime.datetime.now()
    member.save()
    messages.success(request, "Reserved successfully" )
    return redirect('/member/home')


@login_required(login_url = '/member/login')
def view_all_issued(request):
    try:
        request.user.member
    except Exception:
        return render(request,'error.html')
    member = request.user.member
    books = member.book_set.all()
    return render(request, 'view_all_issued.html',{'books':books})

@login_required(login_url = '/member/login')
def return_book(request,book_id):
    try:
        request.user.member
    except Exception:
        return render(request,'error.html')
    """ member = request.user.member
    book = Book.objects.get(id=book_id)
    issued_from = book.issue_date
    issued_till = datetime.date.today()
    book.issued_to = None
    reserved_members = book.member_set.all()
    if len(reserved_members)==0:
        book.is_available = True
    else:
        reserved_members.order_by('reserve_date')
        reserved_members[0].reserved_book = None
        reserved_members[0].save()
        Reminder(user=reserved_members[0], book=book, message="This book is now available. Please issue this book", reminder_date=datetime.date.today().isoformat()).save()
    book.is_returned = True
    book.save()
    issued_days = (issued_till-issued_from).days
    penalty = 0
    if (member.user_type == 'UG' or member.user_type == 'PG') and issued_days>30:
        penalty = 10*(issued_days-30)
    if member.user_type == 'RS' and issued_days>90:
        penalty = 10*(issued_days-90)
    if member.user_type == 'FAC' and issued_days>180:
        penalty = 10*(issued_days-180)
    Issue_database(user=member, book=book, issued_from=issued_from, issued_till=issued_till, penalty=penalty, tax=penalty*0.1, total_penalty=penalty*1.1).save()
    messages.success(request, "Book was successfully returned and bill has been generated. Please check the bill under the issue history section")
    return redirect('/member/home',) """
    member = request.user.member
    book = Book.objects.get(id=book_id)
    issued_from = book.issue_date
    issued_till = datetime.date.today()
    Return_request(member=member, book=book, issue_date=issued_from, request_date=issued_till).save()
    messages.success(request, "Return request has been sent to the librarian. You will be notified once the book is returned")
    return redirect('/member/home')



@login_required(login_url = '/member/login')
def issue_history(request):
    try:
        request.user.member
    except Exception:
        return render(request,'error.html')
    issue_database = Issue_database.objects.filter(user = request.user.member)
    return render(request, 'view_books2.html',{'books':issue_database})

@login_required(login_url = '/member/login')
def reminder_view(request):
    try:
        request.user.member
    except Exception:
        return render(request,'error.html')
    member = request.user.member
    reminders = member.reminder_set.all()
    return render(request, 'view_reminders.html',{'reminders':reminders})
@login_required(login_url='member/login')
def delete_reminder(request, reminder_id):
    try:
        request.user.member
    except Exception:
        return render(request,'error.html')
    Reminder.objects.get(id=reminder_id).delete()
    return redirect('/member/reminders')
@login_required(login_url='member/login')
def view_bill(request, id):
    try:
        request.user.member
    except Exception:
        return render(request,'error.html')
    database=Issue_database.objects.get(id=id)
    return render(request, 'bill.html', {'database': database})
def logout_member(request):
    try:
        request.user.member
    except Exception:
        return render(request,'error.html')
    logout(request)
    return redirect("/")

