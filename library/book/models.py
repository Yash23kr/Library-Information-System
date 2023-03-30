from django.db import models

# Create your models here.
class Book(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    is_available = models.BooleanField(default=True)
    isbn = models.CharField(max_length=100)
    issue_date = models.DateField(null = True, blank = True)
    #return_requested = models.BooleanField(default=False)
    issued_to = models.ForeignKey("members.Member", on_delete = models.SET_NULL, null = True, blank=True)
    is_returned = models.BooleanField(default=True)
    issue_freq = models.IntegerField(default=0)
    rack_number = models.CharField(max_length=100, default="")
    last_issued = models.DateField(null=True, blank=True)
