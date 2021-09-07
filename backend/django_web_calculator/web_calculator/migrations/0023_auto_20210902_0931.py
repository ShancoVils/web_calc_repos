# Generated by Django 3.2.5 on 2021-09-02 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_calculator', '0022_auto_20210901_1656'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sectionobjects',
            name='object_type',
        ),
        migrations.AddField(
            model_name='sectionobjects',
            name='input_data_objects',
            field=models.JSONField(default=1, max_length=400, verbose_name='Элементы диапазона'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='sectionobjects',
            name='description_objects',
            field=models.JSONField(max_length=100, verbose_name='Описание'),
        ),
    ]
