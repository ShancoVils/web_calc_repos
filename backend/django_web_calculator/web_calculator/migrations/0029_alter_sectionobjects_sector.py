# Generated by Django 3.2.5 on 2021-09-07 13:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('web_calculator', '0028_alter_pageobjects_data_created'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sectionobjects',
            name='sector',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web_calculator.pageobjects', verbose_name='Сектор'),
        ),
    ]
