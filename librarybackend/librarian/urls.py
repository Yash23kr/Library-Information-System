from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    #path("registration/", views.register_staff, name="registration"),
    path('login/', views.login_admin, name='admin_login'),
    path('home/', views.admin_home, name='admin_home'),
    path('logout/', views.logout_admin, name='admin_logout'),
    path('view_all', views.view_all_books, name='view_all_books'),
    path('delete_book/<int:book_id>/', views.delete_book, name='delete_book'),
    path('add_book', views.add_book, name='add_book'),
    path('view_members', views.view_members, name='view_members'),
    path('delete_member/<int:id>', views.delete_member, name='delete_member'),
    path('delete_member_alert/<int:id>', views.delete_member_alert, name='delete_member_alert'),
    path('view_staff', views.view_staff, name='view_members'),
    path('delete_staff/<int:id>', views.delete_staff, name='delete_member'),
    path('view_requests', views.view_requests, name='view_requests'),
    path('approve_request/<int:id>', views.approve_request, name='approve_request'),
    path('delete_request/<int:id>', views.delete_request, name='delete_request'),
    path('send_reminder/<int:id>', views.send_reminder, name='send_reminder'),
    #path('return_requests',views.view_return_request, name='view_return_request'),
    #path('approve_return/<int:request_id>',views.approve_return, name='approve_return')
]
