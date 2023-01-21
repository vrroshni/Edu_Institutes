from django.urls import path
from . import views
from .views  import *




urlpatterns = [
    path('list/',institutes_list , name='instituteslist'),
    path('info/',institute_info , name='instituteInfo'),
    path('addinfo/',add_institute_info , name='addinstituteInfo'),
    path('editinfo/',edit_institute_info , name='editinstituteInfo'),


    
]