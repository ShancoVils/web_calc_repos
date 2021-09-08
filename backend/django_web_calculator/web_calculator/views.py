from django.template import loader
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import PageObjects, SectionObjects
from rest_framework.views import APIView
from rest_framework.generics import  get_object_or_404
from .serializers import GetPageObjects


@api_view(['GET'])
def get_page_object(request):
    page_object_data = PageObjects.objects.order_by('data_created')
    serializer = GetPageObjects(page_object_data, many=True)
    page_obj = serializer.data
    return Response(page_obj)


@api_view(['POST'])
def post_page_object(request):
    page_object = request.data.get('page_object')
    serializer = GetPageObjects(data=page_object)
    if serializer.is_valid(raise_exception=True):
        personal_save = serializer.save()
    return Response("Данные добавлены".format(personal_save))



@api_view(['PUT'])
def put_page_object(request,pk):
    person_save = get_object_or_404(PageObjects.objects.all(), pk=pk)
    data = request.data.get('page_object')
    serializer = GetPageObjects(instance=person_save, data=data, partial=True)
    if serializer.is_valid(raise_exception=True):
        personal_save = serializer.save()    
    return Response("Данные обновлены".format(personal_save))

