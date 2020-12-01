import graphene
from graphene import relay
from graphene.types import field
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from .models import EntryPoint


class EntryPointNode(DjangoObjectType):
  class Meta:
    model = EntryPoint
    filter_fields = ("id", "date", "value")
    interfaces = (relay.Node, )


class ChartsQuery(graphene.ObjectType):
  entry = relay.Node.Field(EntryPointNode)
  all_entries = DjangoFilterConnectionField(EntryPointNode)

  # def resolve_all_entries(root, info):
  #   return EntryPoint.objects.all()
