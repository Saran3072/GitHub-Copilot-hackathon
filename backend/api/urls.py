from django.contrib import admin
from django.urls import path, include
from api import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.index, name='home'),
    # path('https://microsoft-backend.azurewebsites.net/', TemplateView.as_view(template_name = 'index.html')),
    path('<slug:City>', views.weather),
]
