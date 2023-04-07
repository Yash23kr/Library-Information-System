from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('',views.home_page, name='home'),
    path('login',views.login_page, name='login'),
    path('registration',views.registration_page, name='registration'),
]
