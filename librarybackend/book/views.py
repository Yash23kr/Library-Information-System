from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect,HttpResponse
from .models import *

def home_page(request):
    return render(request, 'home_page.html')

def login_page(request):
    return render(request, 'login_page.html')
def registration_page(request):
    return render(request, 'registration_page.html')