import React, { useEffect } from 'react';
import ClientList from './components/clients';
import CreateClient from './components/clients/create'

function App() {


  useEffect(() => {
    // fetch('http://127.0.0.1:8080/books')
    // .then((response) => response.json()).catch((error) => {console.log(`ERRO IDIOTA: ${error}`)})
    // .then((response) => {console.log(response)}) 

    // fetch('http://127.0.0.1:8080/graphql', {
    //   method: 'POST',
    //   headers: {
    //     "Content-type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({query: "{ users {name, email}, hello }"})
    // })
    // .then((response) => response.json())
    // .then((response) => console.log(response))
  }, [])
  


  return (
    <>
      <h1>Home</h1>
      <br />
      <ClientList/>
      <CreateClient/>
    </>
  );
}

export default App;
