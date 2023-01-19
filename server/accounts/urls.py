from django.urls import path
from . import views
from .views  import *

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns = [
    path('',views.index),
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    
    path('register/', registerUser, name='register'),
    
    
    

]