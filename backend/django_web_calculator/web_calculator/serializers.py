from rest_framework import serializers
from .models import PageObjects, SectionObjects
from web_calculator import models





class GetSectionElement(serializers.ModelSerializer):
    class Meta:
        model = SectionObjects
        fields = '__all__'



class GetPageObjects(serializers.Serializer):
    id = serializers.IntegerField()
    name_object = serializers.CharField()
    content = serializers.JSONField()
    sector = serializers.SerializerMethodField()
    depth = 1

    def create(self, validated_data):
        return PageObjects.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance

    # Метод для того, что бы записи всегда выводились по дате создания
    def get_sector(self, instance):
        sector = instance.sector.all().order_by('data_created')
        return GetSectionElement(sector, many=True).data

    

