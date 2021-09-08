from django.db.models import fields
from rest_framework import serializers
from .models import PageObjects, SectionObjects
from web_calculator import models





class GetSectionElement(serializers.ModelSerializer):
    class Meta:
        model = SectionObjects
        fields = '__all__'


class GetPageObjects(serializers.ModelSerializer):
    sector = serializers.SerializerMethodField(read_only = True)
    sector_objects = GetSectionElement(write_only=True, many = True)

    class Meta:
        model = PageObjects
        fields = '__all__'

    def create(self, validate_data):
        sector_data = validate_data.pop('sector_objects')
        print(sector_data)
        all_date = PageObjects.objects.create(**validate_data)
        print(all_date)
        for sector_data_elem in sector_data:
            SectionObjects.objects.create(sector = all_date,**sector_data_elem)
        return all_date


    def update(self, instance, validate_data):
        sector_data = validate_data.pop('sector_objects')
        sector_list = (instance.sector).all()
        sector_list = list(sector_list)
        instance.content = validate_data.get('content', instance.content)

        for sector_data_elem in sector_data:
            sector_list_elem = sector_list.pop(0)
            sector_list_elem.description_objects = sector_data_elem.get('description_objects', sector_list_elem.description_objects)
            sector_list_elem.input_data_objects = sector_data_elem.get('input_data_objects', sector_list_elem.input_data_objects)
            sector_list_elem.save()
        return instance


        #Метод для того, что бы записи всегда выводились по дате создания
    def get_sector(self, instance):
        sector = instance.sector.all().order_by('data_created')
        return GetSectionElement(sector, many=True).data
    