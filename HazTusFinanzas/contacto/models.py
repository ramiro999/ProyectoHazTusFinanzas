from inspect import classify_class_attrs
from pyexpat import model
from django.db import models

# Create your models here.

class Contacto(models.Model):
    name = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    correo = models.CharField(max_length=100)
    comentario = models.CharField(max_length=500)
    fecha_creacion = models.DateTimeField(auto_now=True)

    