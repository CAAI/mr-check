from django.db import models

# Create your models here.
class EntryPoint(models.Model):
  value = models.FloatField()
  date = models.DateTimeField()
  scan = models.ImageField()