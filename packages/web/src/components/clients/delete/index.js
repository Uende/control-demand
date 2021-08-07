import gql from "graphql-tag";
import { useMutation } from "react-apollo";
import { GET_CLIENTS_LIST } from "..";


const DELETE_CLIENT = gql`

    mutation DELETECLIENT($_id: ID!){
        deleteClient(input: {_id: $_id})
    }

`



export default function DeleteClient({clientId}){

    const idClient = {_id: clientId}

    const [deleteClient] = useMutation(DELETE_CLIENT)

    //console.log(`Meu CLIENTID NO DELETE: ${clientId}`)

    // useEffect(() => {
    //     setIdClient({_id: clientId})
    // }, [])

    function handleSubmit(event){
        event.preventDefault()
        //console.log(idClient)
        deleteClient({
            variables: idClient,
            refetchQueries: [
                {
                    query: GET_CLIENTS_LIST
                }
            ]
        }).catch((error) => console.log(error))
    }

    

    return(
        // <form onSubmit={handleSubmit}>
        //     <input type="text" placeholder="ID do Cliente" onChange={(e) => setIdClient({_id: e.target.value})}/>
        //     <button type="submit">Deletar Cliente</button>
        // </form>

        <button onClick={handleSubmit} type="submit">&#128465;</button>
    )
}