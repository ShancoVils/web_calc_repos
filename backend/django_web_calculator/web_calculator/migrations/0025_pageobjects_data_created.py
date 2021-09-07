# Generated by Django 3.2.5 on 2021-09-06 10:37

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('web_calculator', '0024_alter_pageobjects_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='pageobjects',
            name='data_created',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания'),
        ),
    ]