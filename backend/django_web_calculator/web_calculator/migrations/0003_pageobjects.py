# Generated by Django 3.2.5 on 2021-08-30 08:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('web_calculator', '0002_delete_person'),
    ]

    operations = [
        migrations.CreateModel(
            name='PageObjects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('test_text', models.JSONField(max_length=100, verbose_name='Заголовок')),
            ],
        ),
    ]