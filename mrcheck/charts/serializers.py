from django.db.models.base import Model
from rest_framework.serializers import ModelSerializer
from charts.models import EntryPoint

class EntryPointSerializer(ModelSerializer):
    class Meta:
        model = EntryPoint
        fields = ["value", "scan", "date", "id"]