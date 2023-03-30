from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect,HttpResponse
from .models import *

def home_page(request):
    return render(request, 'home_page.html')