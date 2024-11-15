from celery import shared_task
import time

@shared_task
def my_task():
    # Task logic here
    time.sleep(3)
    print("Hello")