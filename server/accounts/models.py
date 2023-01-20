from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db.models.signals import pre_save


# Create your models here.
class MyAccountManager(BaseUserManager):
    def create_user(self, first_name, last_name, username, email, password=None):
        if not email:
            raise ValueError('User must have an e-mail address')
        
        if not username:
            raise ValueError('User must have an Username')

        user = self.model(
            email       = self.normalize_email(email),
            username    = username,
            first_name  = first_name,
            last_name   = last_name,
        )

        #password will be hashed in database
        user.set_password(password)
        user.save(using=self._db)
        return user

     #to create/Register superuser
    def create_superuser(self, first_name, last_name, username, email, password):
        user = self.create_user(
            email      = self.normalize_email(email),
            username   = username,
            password   = password,
            first_name = first_name,
            last_name  = last_name,
        )
        
        user.is_admin   = True
        user.is_active  = True
        user.is_staff   = True
        user.is_superadmin  = True
        user.save(using=self._db)
        return user


class Accounts(AbstractBaseUser):
    first_name      = models.CharField(max_length=50)
    last_name       = models.CharField(max_length=50)
    full_name       =models.CharField(max_length=50,null=True)
    username        = models.CharField(max_length=50, unique=True)
    email           = models.EmailField(max_length=100, unique=True)
    pro_pic         =models.FileField(upload_to='pro_pic',null=True)
    
    #Required fields
    date_joined     = models.DateField(auto_now_add=True)  
    is_admin        = models.BooleanField(default=False)
    is_staff        = models.BooleanField(default=False)
    is_active       = models.BooleanField(default=True)
    is_superadmin   = models.BooleanField(default=False) 
    is_institute   = models.BooleanField(default=False) 





    USERNAME_FIELD      = 'email'
    REQUIRED_FIELDS     = ['username', 'first_name', 'last_name']

    objects = MyAccountManager()


    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None): 
        return self.is_admin

    def has_module_perms(self, add_label):
        return True



def updateUserDetails(sender,instance,**kwargs):
    user=instance
    if not user.full_name:
        user.full_name = f'{user.first_name} {user.last_name}'
pre_save.connect(updateUserDetails,sender=Accounts)





class InstitutionDetails(models.Model):
    institute=models.ForeignKey(Accounts,related_name='account',on_delete=models.CASCADE,null=True)
    found_on=models.DateField(auto_now_add=True,null=True)
    location=models.CharField(max_length=50,null=True)
    description=models.CharField(max_length=1500,null=True)
    website=models.CharField(max_length=50,null=True)
    about_video=models.FileField(upload_to='about_video',null=True)

    def __str__(self):
        return self.institute.full_name
