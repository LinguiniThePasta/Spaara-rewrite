from django.db import models
import uuid
# Create your models here.


# class GroceryList(models.Model):
#     id = models.UUIDField(
#         primary_key=True,
#         default=uuid.uuid4,
#         editable=False
#     )
#     name = models.CharField()
#     owner = models.ForeignKey()
#     collaborators = models.ManyToManyField()
#     budget = models.DecimalField(decimal_places=2)