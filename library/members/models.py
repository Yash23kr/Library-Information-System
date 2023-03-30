from django.db import models
from django.contrib.auth.models import User
from book.models import Book
# Create your models here.
class Member(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    max_books = models.IntegerField(default=0, blank= True)
    user_type = models.CharField(max_length=5)
    reserved_book = models.ForeignKey(Book, on_delete=models.CASCADE, blank= True, null=True)
    reserve_date = models.DateTimeField(null = True, blank=True)
    penalties = models.IntegerField(default=0)

class Issue_database(models.Model):
    user = models.ForeignKey(Member, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    issued_from = models.DateField()
    issued_till = models.DateField()
    penalty = models.IntegerField(default = 0)
    tax = models.IntegerField(default = 0)
    total_penalty = models.IntegerField(default = 0)

class Reminder(models.Model):
    user = models.ForeignKey(Member, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    reminder_date = models.DateField()
    message = models.TextField(max_length=2000)
