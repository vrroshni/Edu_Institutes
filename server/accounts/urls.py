from django.urls import path
from . import views
from .views  import *

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', register_user, name='register'),
    
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('profile/',views.get_user_profile,name='getuserprofile'),
    path('editprofile/', edit_user_profile, name='editprofile'),


    
]