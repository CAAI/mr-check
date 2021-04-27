from django.urls.conf import path
from charts import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns=[
    path("data/", views.DataView.as_view())
]
urlpatterns = format_suffix_patterns(urlpatterns)