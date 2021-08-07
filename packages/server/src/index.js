import express from 'express'
import cors from 'cors'
import {ApolloServer} from 'apollo-server-express'
import { typeDefs } from './api/typedefs.js'
import { resolvers } from './api/resolvers.js'
import { Books } from './database/index.js'


const app = express()

app.use(cors())

app.get('/books', (_, response) => response.json(Books))

const server = new ApolloServer({typeDefs, resolvers})

//Para compilar
await server.start()

//Para incluir GraphQL no Express 
server.applyMiddleware({app})

app.listen(8080, () => {
    console.log('Server running http://127.0.0.1:8080')
})

