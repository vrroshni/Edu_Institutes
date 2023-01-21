from rest_framework import serializers
from .models import Accounts




class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Accounts
        fields='__all__'
        
        
class UpdateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Accounts
        fields='__all__'