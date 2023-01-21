from rest_framework import serializers
from accounts.serializers import ProfileSerializer
from accounts.models import Accounts,InstitutionDetails


class InstituteSerializer(serializers.ModelSerializer):
    institute=ProfileSerializer(read_only=True)
    class Meta:
        model=InstitutionDetails
        fields='__all__'
        
class New_InstituteSerializer(serializers.ModelSerializer):
    class Meta:
        model=InstitutionDetails
        fields='__all__'
