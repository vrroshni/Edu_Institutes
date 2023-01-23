from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser  # staff status true
from django.contrib.auth.hashers import make_password



from .models import Accounts
from .serializers import ProfileSerializer,UpdateProfileSerializer



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        
        token['username'] = user.username
        token['is_institute'] = user.is_institute
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['full_name'] = user.full_name
        token['email'] = user.email

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
@api_view(['POST'])
def register_user(request):
    data = request.data
    try:
        username_exists = Accounts.objects.filter(username=data['username']).exists()
        email_exists = Accounts.objects.filter(email=data['email']).exists()
        if username_exists or email_exists:
            message = {'detail': 'User with this username or email already exists'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)

        user = Accounts.objects.create_user(
            first_name=data['first_name'],
            last_name=data['last_name'],
            username=data['username'],
            email=data['email'],
            password=data['password'],
        )
        if data['is_institute'] == 'True':
            user.is_institute=True
        user.save()
        return Response(status=status.HTTP_201_CREATED)
    except Exception as e:
        message = {'detail': "Your Profile is not registered"}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)   
    
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_profile(request):
    user = request.user
    serializer = ProfileSerializer(user, many=False)
    return Response(serializer.data)




@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def edit_user_profile(request):
    user = request.user
    data = request.data
    if Accounts.objects.exclude(id=user.id).filter(username=data['username']).exists():
            message = {'detail': 'User with this username already exists'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
    if Accounts.objects.exclude(id=user.id).filter(email=data['email']).exists():
            message = {'detail': 'User with this email already exists'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
    serializer = ProfileSerializer(user, data=data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

