from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path("registration/", views.register_staff, name="registration"),
    path('login/', views.login_staff, name='staff_login'),
    path('home/', views.staff_home, name='staff_home'),
    path('logout/', views.logout_staff, name='staff_logout'),
    path('view_all', views.view_all_books, name='view_all_books'),
    path('delete_book/<int:book_id>/', views.delete_book, name='delete_book'),
    path('add_book', views.add_book, name='add_book'),
    path('return_requests',views.view_return_request, name='view_return_request'),
    path('approve_return/<int:request_id>',views.approve_return, name='approve_return')
]
