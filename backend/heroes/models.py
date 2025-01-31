from django.db import models
import uuid

class Hero(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='heroes/')

    def __str__(self):
        return self.name
