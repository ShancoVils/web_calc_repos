# Generated by Django 3.2.5 on 2021-08-31 09:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('web_calculator', '0010_alter_pageobjects_content'),
    ]

    operations = [
        migrations.CreateModel(
            name='SectionObjects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description_objects', models.JSONField(max_length=100, verbose_name='Описание элементов ')),
                ('range_objects', models.JSONField(max_length=100, verbose_name='Элементы диапазона')),
                ('sector', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web_calculator.pageobjects', verbose_name='Сектор')),
            ],
            options={
                'verbose_name_plural': 'Элементы сектора',
            },
        ),
    ]
