from django.db import models

class Patient(models.Model):
    name = models.CharField(max_length=255)
    tablet_timing = models.DateTimeField()
    sickness_status = models.CharField(max_length=100)
