import {gql} from 'apollo-server-express'

export const typeDefs = gql`

    type Demand{
        _id: ID!
        client: Client!
        name: String!
        tasks: String!
        dealine: String!
    }

    type Client{
        _id: ID!
        name: String!
        phone: Float!
        email: String!
        password: String!
        demand: Demand!
        demandName: String!
    }

    type Admin{
        _id: ID!
        name: String!
        password: String!
    }


    type Query{
        clients(_id: ID): [Client]!
        demands: [Demand]!
        admin: Admin!
        getClientId(_id: ID!): Client!
    }

    input CreateClientInput{
        _id: ID!
        name: String! 
        email: String! 
        phone: String! 
        password: String! 
        demandName: String!
    }

    input DeleteClientInput{
        _id: ID!
    }

    input UpdateClientInput{
        _id: ID!
        name: String 
        email: String 
        phone: String 
        password: String 
        demandName: String

    }

    type Mutation{
        createClient(input: CreateClientInput!): Client! 
        updateClient(input: UpdateClientInput!) : Client!
        deleteClient(input: DeleteClientInput!): Boolean 
    }

`