import graphene
from graphene.types import schema
from graphene.types.schema import Schema
from charts.schema import ChartsQuery


class Query(ChartsQuery, graphene.ObjectType):
    base = graphene.String()


schema = Schema(query=Query)