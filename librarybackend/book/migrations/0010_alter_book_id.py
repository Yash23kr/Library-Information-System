# Generated by Django 4.1.7 on 2023-03-27 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0009_book_last_issued'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
