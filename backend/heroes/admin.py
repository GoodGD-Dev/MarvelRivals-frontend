from django.contrib import admin
from .models import Hero  # Importa o modelo Hero

@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'image')  # Exibe essas colunas na lista de heróis
