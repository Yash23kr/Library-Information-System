from django.db import models
from django.contrib.auth.models import User
from book.models import Book
from members.models import Member
# Create your models here.
class Librarian(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class StaffRequest(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=100)

    
