# Generated by Django 2.1.5 on 2023-03-25 12:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0007_book_issue_freq'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='rack_number',
            field=models.CharField(default='', max_length=100),
        ),
    ]
