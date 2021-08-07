import { ApolloClient } from 'apollo-client'
//o ApolloClient trbalha com cache, é necessário instalar algum tipo, pode ser: cookies, localStorage ou inmemory
import { InMemoryCache } from 'apollo-cache-inmemory'
import link from '../link'


const cache = new InMemoryCache()

const client = new ApolloClient({
    link,
    cache,
    //importante para usar flags
    connectToDevTools: true
})


// client.query({
//     query: gql`
    
//     `,
//     variables: {

//     },
// })

export default client