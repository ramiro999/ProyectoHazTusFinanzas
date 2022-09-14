# Generated by Django 4.1.1 on 2022-09-09 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contacto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=100)),
                ('correo', models.CharField(max_length=100)),
                ('comentario', models.CharField(max_length=500)),
                ('fecha_creacion', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]