# Generated by Django 2.1.5 on 2023-03-23 13:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0002_auto_20230323_1749'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='reserved_by',
        ),
    ]
