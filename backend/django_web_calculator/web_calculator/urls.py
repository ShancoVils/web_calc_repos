from .import views
from django.urls import path



urlpatterns = [
    # Элементы страницы (заголовок, футер и секции)
    path('page-objects/', views.get_page_object),
    path('post_page-objects/', views.post_page_object),
    path('put_page_objects/<int:pk>', views.put_page_object),

]