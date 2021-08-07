import { gql } from 'graphql-tag'
import { useQuery } from 'react-apollo'
import DeleteClient from './delete'
import UpdateClient from './update'



//Montando a Query
export const GET_CLIENTS_LIST = gql`
        
        query GET_CLIENTS_LIST{
            clients{
                _id
                name
                email
            }
        }

`

export default function ClientList(){

    const {

        //DESCONSTRUINDO

        //dados recebidos na consulta
        data,
        //consulta em andamento
        loading,
        //caso de erro
        error,
        //atualizar => fecthMore

        //refetch para recarregar a Query
        
    } = useQuery(GET_CLIENTS_LIST, {

        //dizer como iremos buscar nossos dados
        //esse verifica no servidor e no cache
        fetchPolicy: 'cache-and-network'
    })

    if(error){
        return(
            <section><h1>Erro ao carregar clientes</h1></section>
        )
    }

    if(loading){
        return(
            <section><h1>Carregando...</h1></section>
        )
    }


    const clients = data?.clients ?? []

    //console.log(clients)

    // const handleClientId = (client) => () => {
    //     // console.log(client)
    //     // on = client
    //     // console.log(on)
    //     onSelectClient = {_id: client}
    //     console.log(onSelectClient)
    //     return onSelectClient
    // }


    // function handle(clienteId){
    //     setId({_id: clienteId})
    //     onSelectClient = id
    //     console.log(onSelectClient)
    // }

    // function onSelect(id){

    //     console.log(`Meu id: ${id}`)
    //     clientId = id
    //     clientSelected += 1
    //     console.log('clientSelected recebeu true')
    //     if(clientSelected === 1){
    //         console.log(`Meu id dentro do client: ${idClient}`)
    //         console.log(clientId)
            
    //     }

    //     return clientId
    // }

    

    return(
        <>
            <div>
                {
                    clients.map((client) => (
                        <div key={client._id}>
                            <h1>{client.name}</h1>
                            <h1>{client.email}</h1>
                            <h1>{client._id}</h1>
                            <DeleteClient clientId = {client._id}/>
                            <UpdateClient clientId = {client._id}/>
                        </div>
                    ))
                }
            </div>
        </>
    )

}