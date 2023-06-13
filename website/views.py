from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings


# Create your views here.
def home(request):
	return render(request,'base.html')

def contact_form(request):
	if request.method == 'POST':
	    name = request.POST.get('name')
	    email = request.POST.get('email')
	    message = request.POST.get('message')

	    # Send the email
	    send_mail(
	        subject='Porfolio form submited',
	        message=f'Name: {name}\nEmail: {email}\nMessage: {message}',
	        from_email=settings.EMAIL_HOST_USER,
	        recipient_list=['kieuqhuy@gmail.com'],  # Replace with your email address
	    )

	return render(request, 'base.html')