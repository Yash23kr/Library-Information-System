from django.db import models
from django.contrib.auth.models import User
from book.models import Book
from members.models import Member
# Create your models here.
class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Return_request(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    issue_date = models.DateField()
    request_date = models.DateField()
    
