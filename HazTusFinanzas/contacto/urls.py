from django.urls import path

from . import views

urlpatterns=[
    path('contact',views.contact,name='contacto'),
    path('aprende',views.aprende,name='aprende'),
    path('conoce',views.conoce,name='conoce'),
    path('explora',views.explora,name='explora'),
    path('',views.inicio,name='index'),
    path('crear_contacto', views.crear_contacto, name='crear_contacto')
]