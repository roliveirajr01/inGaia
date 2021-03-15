import React from 'react'
import {ApolloProvider} from 'react-apollo'
import ApolloClient from './services/apollo'

import './App.css';
import Description from './components/description/Description'
import GlobalStyle from './components/globalStyle'


const App = () => {
  return (
    <ApolloProvider client={ApolloClient}>
      <div>
          <GlobalStyle />
          <Description/>
      </div>
    </ApolloProvider>
  );
}

export default App;
