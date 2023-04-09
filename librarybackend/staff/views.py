from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
import datetime
from .models import *
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from librarian.models import StaffRequest
from members.models import *
# Create your views here.
def register_staff(request):
    if request.method == 'POST':
        username = request.POST.get('username', '')
        password1 = request.POST.get('password1', '')
        password2 = request.POST.get('password2', '')
        email = request.POST.get('email_id', '')
        if password1 != password2:
            return render(request, 'staff_registration.html', {'message': 'Password mismatch'})
        if len(User.objects.filter(username=username))!=0:
            return render(request, 'staff_registration.html', {'message':'User already exists please login'})
        if len(User.objects.filter(username=username))!=0 or len(StaffRequest.objects.filter(username=username))!=0:
            return render(request, 'staff_registration.html', {'message':'Approval request sent to Librarian. Please wait till approval'})
        StaffRequest(username=username, password=password1, email=email).save()
        messages.success(request, 'Staff registration request sent, please wait for the librarian to approve')
        return redirect('/')
    return render(request, 'staff_registration.html', {'message': ''})

def login_staff(request):
    if request.method == 'POST':
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        user = authenticate(username=username, password=password)
        if user is None:
            return render(request, 'staff_login.html', {'message':'Incorrect username or password'})
        try:
            user.staff
            login(request,user)
            return redirect('/staff/home')
        except Exception:
            return render(request, 'staff_login.html', {'message':'You are not Authorised to access this page'})
    return render(request,'staff_login.html',{'message':''} )

@login_required(login_url='/staff/login')
def staff_home(request):
    try:
        request.user.staff
    except Exception:
        return render(request,'error.html')
    return render(request, 'staff_home.html',{'staff': request.user.staff})

@login_required(login_url='/staff/login')
def logout_staff(request):
    try:
        request.user.staff
    except Exception:
        return render(request,'error.html')
    logout(request)
    return redirect('/')

@login_required(login_url='/staff/login')
def view_all_books(request):
    try:
        request.user.staff
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
        return render(request, 'view_all_books.html', {'books':filtered_books})
    books = Book.objects.all()
    books = books.order_by('issue_freq')
    books = books.reverse()
    return render(request, 'view_all_books.html', {'books': books})

@login_required(login_url='/staff/login')
def delete_book(request, book_id):
    try:
        request.user.staff
    except Exception:
        return render(request,'error.html')
    Book.objects.filter(id=book_id).delete()
    return redirect('/staff/view_all')

@login_required(login_url='/staff/login')
def add_book(request):
    try:
        request.user.staff
    except Exception:
        return render(request,'error.html')
    if request.method == 'POST':
        name = request.POST.get('name',"")
        author = request.POST.get('author',"")
        isbn = request.POST.get('isbn','')
        rack_no = request.POST.get('rack_no','')
        Book(name=name, author=author, isbn=isbn, rack_number=rack_no).save()
        messages.success(request, 'Book successfully added.')
        return redirect('/staff/home')
    return render(request, 'add_book.html')

@login_required(login_url='/staff/login')
def view_return_request(request):
    try:
        request.user.staff
    except Exception:
        return render(request,'error.html')
    requests = Return_request.objects.all()
    return render(request, 'return_request_all.html', {'requests':requests})


def approve_return(request, request_id):
    try:
        request.user.staff
    except Exception:
        return render(request,'error.html')
    ret_request = Return_request.objects.get(id=request_id)
    if request.method == 'POST':
        damage_penalty = float(request.POST.get('penalty',''))
        member = ret_request.member
        book = ret_request.book
        issued_from = ret_request.issue_date
        issued_till = ret_request.request_date
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
        tax=(damage_penalty+penalty)*0.1
        total_penalty=damage_penalty+penalty+((damage_penalty+penalty)*0.1)
        subtotal=damage_penalty+penalty
        ret_request.delete()
        Issue_database(user=ret_request.member, book=ret_request.book, issued_from=ret_request.issue_date, issued_till=ret_request.request_date, damage_penalty=damage_penalty, penalty=penalty, tax=tax,total_penalty=total_penalty, subtotal=subtotal).save()
        messages.success(request, 'Return processed successfully')
        return redirect('/staff/home')
    return render(request,'staff_confirm_return_request.html')
        
