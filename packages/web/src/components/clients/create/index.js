import { gql } from 'graphql-tag'
import { useState } from 'react'
import { useMutation } from 'react-apollo'
import { GET_CLIENTS_LIST } from '..'

const CREATE_CLIENT = gql`

    mutation createClient($_id: ID!, $name: String!, $email: String!, $phone: String!, $password: String!, $demandName: String!){
        createClient(input: {
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


export default function CreateClient(){

    const ID = new Date().getMilliseconds()

    const [inputs, setInputs] = useState({
        _id: String(ID * 189 * ID), name: "", email: "", phone: "", password: "", demandName: ""
    })

    //primeiro função e segundo objeto
    const [createClient, {loading}] = useMutation(CREATE_CLIENT)  

    // const [createClient, {data, error, loading}] = useMutation(CREATE_CLIENT)  
    // console.log(data?.createClient)

    if(loading){
        return(
            <section><h1>Carregando...</h1></section>
        )
    }

    function handleSubmit(e){
        e.preventDefault()
        createClient({
           variables: inputs,
           refetchQueries: [
               {
                   query: GET_CLIENTS_LIST
               }
           ]
        }).catch((error) => console.log(error))

        setInputs({
            _id: String(ID), name: "", email: "", phone: "", password: "", demandName: ""
        })
    }   

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <input type="text" placeholder="Nome" onChange={(e) => setInputs({...inputs, name: e.target.value})}/>
                <input type="text" placeholder="Email" onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
                <input type="text" placeholder="Telefone" onChange={(e) => setInputs({...inputs, phone: e.target.value})}/>
                <input type="password" placeholder="Senha" onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
                <input type="text" placeholder="Demanda" onChange={(e) => setInputs({...inputs, demandName: e.target.value})}/>
            </fieldset>
            <button disabled={loading} type="submit">Adicionar</button>
        </form>
    )
}
