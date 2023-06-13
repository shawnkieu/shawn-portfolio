from django.urls import path
from . import views

urlpatterns = [
	path('',views.home,name='homepage'),
	path('contact/',views.contact_form,name='contact_form')
]
