# Generated by Django 2.1.5 on 2023-03-25 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0005_reminder_reminder_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='issue_database',
            name='penalty',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='member',
            name='penalties',
            field=models.IntegerField(default=0),
        ),
    ]
