# Generated by Django 2.1.5 on 2023-03-24 14:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0005_book_is_returned'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='return_requested',
        ),
    ]
