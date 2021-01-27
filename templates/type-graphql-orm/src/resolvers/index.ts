import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'

export default function getSchema(): Promise<GraphQLSchema> {
	return buildSchema({
		resolvers: [],
	})
}
