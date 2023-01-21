from django.contrib import admin
from .models import Accounts,InstitutionDetails

# Register your models here.


admin.site.register(Accounts)
admin.site.register(InstitutionDetails)