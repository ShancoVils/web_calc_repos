# Generated by Django 3.2.5 on 2021-08-31 06:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('web_calculator', '0008_remove_pageobjects_sections'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pageobjects',
            old_name='title',
            new_name='content',
        ),
    ]
