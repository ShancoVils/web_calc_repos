# Generated by Django 3.2.5 on 2021-09-01 10:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('web_calculator', '0017_auto_20210901_1335'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('test', models.CharField(max_length=100, verbose_name='Описание элементов ')),
                ('test_text', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web_calculator.pageobjects', verbose_name='Сектор')),
            ],
        ),
    ]