import 'reflect-metadata'
import fastify from 'fastify'
import mercurius from 'mercurius'
import fastifyCors from 'fastify-cors'
import { createConnection } from 'typeorm'
import altairFastify from 'altair-fastify-plugin'

import getSchema from './resolvers'
;(async () => {
	const app = fastify()
	const port = process.env.PORT || 5000
	await createConnection()

	const schema = await getSchema()

	app.register(fastifyCors)

	app.register(mercurius, {
		graphiql: false,
		ide: false,
		schema,
		path: '/graphql',
	})

	app.register(altairFastify, {
		path: '/altair',
		baseURL: '/altair/',
		endpointURL: '/graphql',
	})

	await app.listen(port).then(() => {
		console.log(`Listen at ${port}`)
	})
})()
