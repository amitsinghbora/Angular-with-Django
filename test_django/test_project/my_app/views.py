from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .tasks import my_task
from django.http import HttpResponse, JsonResponse


# Create your views here.
class Task(APIView):
    def post(self, request, *args, **kwargs):
        return Response({"message":"Created a task"})
    
def tasks(request):
    data = [
        {"id": 1, "name": "John Doe", "role": "Developer"},
        {"id": 2, "name": "Jane Smith", "role": "Designer"},
        {"id": 3, "name": "Mike Brown", "role": "Manager"},
    ]
    return JsonResponse(data, safe=False)