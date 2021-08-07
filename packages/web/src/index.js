import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//É necessário encapsular toda a aplicação que utilizará o Apollo
import {ApolloProvider} from 'react-apollo'
import client from './apollo/client';

ReactDOM.render(

  //Recebe obrigatoriamente um client
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

