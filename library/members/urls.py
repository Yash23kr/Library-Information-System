from django.urls import path
from . import views

urlpatterns = [
    path("registration/", views.register_member, name="registration"),
    path('login/', views.login_member, name='member-login'),
    path('home/', views.home_member, name='home'),
    path('logout/', views.logout_member, name='logout'),
    path('view_books', views.view_books, name='view_books'),
    path("issue_book/<int:book_id>/", views.issue_book, name="issue_book"),
    path('view_all_issued', views.view_all_issued, name='view_all_issued'),
    path('return/<int:book_id>/', views.return_book, name='return'),
    path('history', views.issue_history, name='issue_history'),
    path('reserve_book/<int:book_id>/', views.reserve_book, name='reserve'),
    path('reminders', views.reminder_view, name='reminder'),
    path('delete_reminder/<int:reminder_id>/', views.delete_reminder),
    path('view_bill/<int:id>', views.view_bill,name="view_bill"),
]
