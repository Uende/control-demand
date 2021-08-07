import gql from "graphql-tag";
import { useState } from "react";
import { useMutation } from "react-apollo";
import { GET_CLIENTS_LIST } from "..";

const UPDATE_CLIENT = gql`

    mutation UDATECLIENT($_id: ID!, $name: String, $email: String, $phone: String, $password: String, $demandName: String){
        updateClient(input: { 
            _id: $_id 
            name: $name 
            email: $email
            phone: $phone
            password: $password
            demandName: $demandName
        }){
            _id
            name
            email
            phone
        }
    }

`

export default function UpdateClient({clientId}){

    const [inputs, setInputs] = useState({_id: `${clientId}`, name: "", email: "", phone: "", password: "", demandName: ""})
    const [show, setShow ]= useState(false)
    
    //console.log(`Meu CLIENTID NO UPDATE: ${clientId}`)

    const [updateCliente, {loading}] = useMutation(UPDATE_CLIENT)

    function handleSubmit(e){
        e.preventDefault()
        updateCliente({
            variables: inputs,
            refetchQueries: [{
                query: GET_CLIENTS_LIST
            }]
        }).catch((error) => console.log(error))
        setShow(false)
    }

    function handleShow(){
        setShow(true)
    }


    return(
        <>
        {
            show === false ? 
                
                <button onClick={handleShow} type="submit">&#9881;</button>

                :

                <form onSubmit={handleSubmit}>
                    <fieldset>
                    {/* <input type="text" placeholder="ID" onChange={(e) => setInputs({...inputs, _id: e.target.value})}/> */}
                        <input type="text" placeholder="Nome" onChange={(e) => setInputs({...inputs, name: e.target.value})}/>
                        <input type="text" placeholder="Email" onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
                        <input type="text" placeholder="Telefone" onChange={(e) => setInputs({...inputs, phone: e.target.value})}/>
                        <input type="password" placeholder="Senha" onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
                        <input type="text" placeholder="Demanda" onChange={(e) => setInputs({...inputs, demandName: e.target.value})}/>
                    </fieldset>
                    <button disabled={loading} type="submit">Atualizar</button>
                </form>   
        }

        </>
    )
    
}