from django.shortcuts import render
from rest_framework import generics
# from rest_framework.response import Response
# from rest_framework.request import Request, HttpRequest
# from rest_framework import status
from charts.models import EntryPoint
from charts.serializers import EntryPointSerializer


class DataView(generics.ListCreateAPIView):
    queryset = EntryPoint.objects.all()
    serializer_class = EntryPointSerializer
    # def get(self, request, format=None):
    #     print(type(request))
    #     data = EntryPoint.objects.all()
    #     data = EntryPointSerializer(data, many=True)
    #     return Response(data.data)
    
    # def post(self, request)