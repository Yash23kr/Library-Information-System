# Generated by Django 4.1.7 on 2023-04-01 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0008_alter_issue_database_id_alter_member_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='issue_database',
            name='damage_penalty',
            field=models.IntegerField(default=0),
        ),
    ]
