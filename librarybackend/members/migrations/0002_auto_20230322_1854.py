# Generated by Django 2.1.5 on 2023-03-22 13:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0001_initial'),
        ('members', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Issue_database',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('issued_from', models.DateField()),
                ('issued_till', models.DateField()),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='book.Book')),
            ],
        ),
        migrations.AddField(
            model_name='member',
            name='max_books',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='member',
            name='reserve_date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='member',
            name='reserved_book',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='book.Book'),
        ),
        migrations.AddField(
            model_name='issue_database',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='members.Member'),
        ),
    ]
