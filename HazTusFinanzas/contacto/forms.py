from dataclasses import field
from django import forms
from .models import Contacto

#Creando el formulario
class ContactoForm(forms.ModelForm):
    class Meta:
        model = Contacto

        #campos
        fields = [
            'name',
            'apellido',
            'correo',
            'comentario'
        ]