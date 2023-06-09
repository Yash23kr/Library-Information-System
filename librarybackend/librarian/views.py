from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
import datetime
from .models import *
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from members.models import Member,Reminder
from staff.models import Staff

# Create your views here.
def register_admin(request):
    if request.method == 'POST':
        username = request.POST.get('username', '')
        password1 = request.POST.get('password1', '')
        password2 = request.POST.get('password2', '')
        email = request.POST.get('email_id', '')
        if password1 != password2:
            return render(request, 'librarian_registration.html', {'message': 'Password mismatch'})
        if len(User.objects.filter(username=username))!=0:
            return render(request, 'librarian_registration.html', {'message':'User already exists please login'})
        user = User.objects.create_user(username=username,password=password1, email=email)
        librarian = Librarian.objects.create(user=user)
        user.save()
        librarian.save()
        return redirect('/librarian/login')
    return render(request, 'librarian_registration.html', {'message': ''})

def login_admin(request):
    if request.method == 'POST':
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        user = authenticate(username=username, password=password)
        if user is None:
            return render(request, 'librarian_login.html', {'message':'Incorrect username or password'})
        try:
            user.librarian
            login(request,user)
            return redirect('/librarian/home')
        except Exception:
            return render(request, 'librarian_login.html', {'message':'You are not Authorised to access this page'})
        else:
            login(request,user)
            return redirect('/librarian/home')
    return render(request,'librarian_login.html',{'message':''} )

@login_required(login_url='/librarian/login')
def admin_home(request):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    return render(request, 'librarian_home.html')

@login_required(login_url='/librarian/login')
def logout_admin(request):
    logout(request)
    return redirect('/')

@login_required(login_url='/librarian/login')
def view_all_books(request):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    if request.method == 'POST':
        name=request.POST.get('search',"")
        sorttype=request.POST.get('sorttype','issue_freq')
        books = Book.objects.all().order_by(sorttype)
        filtered_books=[]
        for book in books:
            if name.lower() in book.name.lower():
                filtered_books.append(book)
        return render(request, 'librarian_view_all_books.html', {'books':filtered_books})
    books = Book.objects.all()
    books = books.order_by('issue_freq')
    books = books.reverse()
    return render(request, 'librarian_view_all_books.html', {'books': books})

@login_required(login_url='/librarian/login')
def delete_book(request, book_id):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    Book.objects.filter(id=book_id).delete()
    return redirect('/librarian/view_all')

@login_required(login_url='/librarian/login')
def add_book(request):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    if request.method == 'POST':
        name = request.POST.get('name',"")
        author = request.POST.get('author',"")
        isbn = request.POST.get('ISBN','')
        rack_no = request.POST.get('rack_no','')
        Book(name=name, author=author, isbn=isbn, rack_number=rack_no).save()
        messages.success(request, 'Book successfully added.')
        return redirect('/librarian/home')
    return render(request, 'librarian_add_book.html')

@login_required(login_url='/librarian/login')
def view_members(request):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    members=Member.objects.all()
    return render(request, 'librarian_view_members.html', {'members': members})

@login_required(login_url='/librarian/login')
def delete_member(request, id):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    member = Member.objects.filter(id=id)
    member[0].user.delete()
    member.delete()
    return redirect('/librarian/view_members')

def delete_member_alert(request, id):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    member = Member.objects.filter(id=id)
    books = member[0].book_set.all()
    if len(books) != 0:
        return render(request, 'delete_member_alert.html',{'id':id})
    return redirect('/librarian/delete_member/'+str(id))
@login_required(login_url='/librarian/login')

def view_staff(request):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    members=Staff.objects.all()
    return render(request, 'librarian_view_staff.html', {'members': members})

@login_required(login_url='/librarian/login')
def delete_staff(request, id):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    staff = Staff.objects.filter(id=id)
    staff[0].user.delete()
    staff.delete()
    return redirect('/librarian/view_staff')

@login_required(login_url='/librarian/login')
def view_requests(request):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    requests = StaffRequest.objects.all()
    return render(request, 'librarian_view_requests.html', {'requests': requests})

@login_required(login_url='/librarian/login')
def approve_request(request, id):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    request = StaffRequest.objects.get(id=id)
    user = User.objects.create_user(username=request.username,password=request.password, email=request.email)
    staff = Staff.objects.create(user=user)
    user.save()
    staff.save()
    StaffRequest.objects.filter(id=id).delete()
    return redirect('/librarian/view_requests')

@login_required(login_url='/librarian/login')
def delete_request(request, id):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    StaffRequest.objects.filter(id=id).delete()
    return redirect('/librarian/view_requests')

@login_required(login_url='/librarian/login')
def send_reminder(request, id):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    book = Book.objects.filter(id=id)
    if book[0].issued_to is None:
        return redirect('/librarian/view_all')
    member = book[0].issued_to
    Reminder(user=member, book=book[0], message="Your book is past due, please return the book", reminder_date=datetime.date.today().isoformat()).save()
    messages.success(request, 'Reminder sent successfully.')
    return redirect('/librarian/home')

@login_required(login_url='/librarian/login')
def active_issues(request, id):
    try:
        request.user.librarian
    except Exception:
        return render(request,'error.html')
    member = Member.objects.filter(id=id)
    books = member[0].book_set.all()
    return render(request, 'librarian_active_issues.html', {'books': books})
