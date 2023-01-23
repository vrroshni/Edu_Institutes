from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser  # staff status true
from accounts.models import InstitutionDetails
from accounts.serializers import ProfileSerializer
from .serializers import InstituteSerializer,New_InstituteSerializer

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def institutes_list(request):
    institutes=InstitutionDetails.objects.filter(institute__is_institute=True)
    serializer = InstituteSerializer(institutes,many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def institute_info(request):
    try:
        user = request.user
        info=InstitutionDetails.objects.get(institute=user.id)
        serializer = InstituteSerializer(info)
        return Response(serializer.data)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)
        
        
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_institute_info(request):
        serializer = New_InstituteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def edit_institute_info(request):
    user=request.user
    data=request.data
    institute=InstitutionDetails.objects.get(institute__id=user.id)
    institute.location=data['location']
    institute.description=data['description']
    institute.website=data['website']
    if data['about_video'] != '':
            institute.about_video = data['about_video']
    institute.save()
    serializer = New_InstituteSerializer(institute,many=False)
    return Response(serializer.data,status=status.HTTP_201_CREATED)



