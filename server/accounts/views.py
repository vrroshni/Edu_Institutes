from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status


from .models import Accounts




class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['is_institute'] = user.is_institute
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
@api_view(['POST'])
def registerUser(request):
    data = request.data
    print(data,'dddddddddddddd')
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
def index(request):
    return Response("hello")