from django.contrib import admin
from django.contrib.admin.options import ModelAdmin
from .models import PageObjects, SectionObjects


class PageObjectsAdmin(ModelAdmin):
    model = PageObjects
    list_display = ('id','name_object','content','data_created','data_update')
    fieldsets = (
        (None, {'fields': ('name_object','content',)}),
    )
    ordering = ('id','name_object','content','data_created','data_update')
    readonly_fields = ('id',)

class SectionObjectsAdmin(ModelAdmin):
    model = SectionObjects
    list_display = ('id','description_objects','input_data_objects','data_created','sector',)
    fieldsets = (
        (None, {'fields': ('description_objects','input_data_objects','sector',)}),
    )
    ordering = ('id','description_objects','input_data_objects','data_created','sector',)
    readonly_fields = ('id',)


# Register your models here.
admin.site.register(PageObjects, PageObjectsAdmin)
admin.site.register(SectionObjects, SectionObjectsAdmin)