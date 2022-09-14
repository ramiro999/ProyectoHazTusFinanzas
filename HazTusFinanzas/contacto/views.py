from multiprocessing import context
from re import template
from django.template import loader
from django.http import HttpResponse
from django.shortcuts import get_object_or_404,redirect,render
# Create your views here.
from .models import Contacto
from .forms import ContactoForm


def crear_contacto(request):
    context = {}
    form = ContactoForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('crear_contacto')    
    context['form'] = form
    return render(request,'contacto.html', context)


def contact(request):
    template = loader.get_template('contacto.html')
    context={}
    return HttpResponse(template.render(context,request))

def inicio(request):
    template = loader.get_template('index.html')
    context={}
    return HttpResponse(template.render(context,request))

def aprende(request):
    template = loader.get_template('aprende.html')
    context={}
    return HttpResponse(template.render(context,request))

def conoce(request):
    template = loader.get_template('conoce.html')
    context={}
    return HttpResponse(template.render(context,request))

def explora(request):
    template = loader.get_template('explora.html')
    context={}
    return HttpResponse(template.render(context,request))