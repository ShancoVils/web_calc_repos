# Generated by Django 3.2.5 on 2021-08-30 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_calculator', '0006_pageobjects_name_object'),
    ]

    operations = [
        migrations.AddField(
            model_name='pageobjects',
            name='sections',
            field=models.JSONField(default=1, max_length=100, verbose_name='Секции'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='pageobjects',
            name='title',
            field=models.JSONField(max_length=100, verbose_name='Содержание'),
        ),
    ]
