from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
import datetime
from .models import *
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from librarian.models import StaffRequest
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
            return render(request, 'staff_registration.html', {'message':'user already exists please login'})
        if len(User.objects.filter(username=username))!=0 or len(StaffRequest.objects.filter(username=username))!=0:
            return render(request, 'staff_registration.html', {'message':'user already exists please login'})
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
            return render(request, 'staff_login.html', {'message':'incorrect username or password'})
        else:
            login(request,user)
            return redirect('/staff/home')
    return render(request,'staff_login.html',{'message':''} )

@login_required(login_url='/staff/login')
def staff_home(request):
    return render(request, 'staff_home.html')

@login_required(login_url='/staff/login')
def logout_staff(request):
    logout(request)
    return redirect('/')

@login_required(login_url='/staff/login')
def view_all_books(request):
    if request.method == 'POST':
        name=request.POST.get('search')
        books = Book.objects.filter(name=name)
        return render(request, 'view_all_books.html', {'books':books})
    books = Book.objects.all()
    books = books.order_by('issue_freq')
    books = books.reverse()
    return render(request, 'view_all_books.html', {'books': books})

@login_required(login_url='/staff/login')
def delete_book(request, book_id):
    Book.objects.filter(id=book_id).delete()
    return redirect('/staff/view_all')

@login_required(login_url='/staff/login')
def add_book(request):
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
    requests = Return_request.objects.all()
    return render(request, 'return_request_all.html', {'requests':requests})


def approve_return(request, request_id):
    ret_request = Return_request.objects.get(id=request_id)
    if request.method == 'POST':
        penalty = request.POST.get('penalty','')
        
