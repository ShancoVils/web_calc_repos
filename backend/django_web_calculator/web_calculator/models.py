from re import T
from django.db import models
from django.db.models.deletion import CASCADE
from django.utils.translation import gettext_lazy as _
from django.utils import timezone




class PageObjects(models.Model):
    name_object = models.CharField(_('Название элемента'),max_length=100)
    content = models.JSONField(_('Содержание'),max_length=100)
    data_created = models.DateTimeField(_('Дата создания'),auto_now_add=True)
    data_update = models.DateTimeField(_('Дата обновления'), auto_now=True)

    class Meta:
        verbose_name_plural = "Объекты страницы"
    
    def __str__(self):
        return str(self.id)

class SectionObjects(models.Model):
    description_objects = models.JSONField(_('Описание'),max_length=100)
    input_data_objects = models.JSONField(_('Элементы диапазона'),max_length=400)
    sector = models.ForeignKey(PageObjects, related_name='sector', on_delete = CASCADE, verbose_name="Сектор", null=True, blank=True)
    data_created = models.DateTimeField(_('Дата создания'),default=timezone.now)

    class Meta:
        verbose_name_plural = "Элементы сектора"
