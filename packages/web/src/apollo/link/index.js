import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'

//O ApolloLink é um array de "link"
const link = ApolloLink.from([

    //retorno em caso de error
    onError((error) => {console.log(`Error GraphQL: ${error}`)}),

    //para acessar o link do servidor
    //deve sempre ser o ultimo
    createHttpLink({
        uri: 'http://127.0.0.1:8080/graphql'
        //fetch: nodefetch ou unfetch
    })
])

export default link

//graphql-tag == gql