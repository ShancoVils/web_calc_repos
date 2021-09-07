# Generated by Django 3.2.5 on 2021-08-30 08:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_calculator', '0003_pageobjects'),
    ]

    operations = [
        migrations.AddField(
            model_name='pageobjects',
            name='title',
            field=models.JSONField(default=1, max_length=100, verbose_name='Заголовок'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='pageobjects',
            name='test_text',
            field=models.CharField(max_length=100, verbose_name='ЗаголовокТест'),
        ),
    ]
