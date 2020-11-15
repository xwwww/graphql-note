import './App.css';
import BookList from './components/BookList'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import AddBook from './components/AddBook'
import { useState } from 'react';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})
function App() {
  let [state, setState] = useState(0)
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>我的书单</h1>
        <BookList state={state} handleAdd={setState}/>
        <AddBook state={state} handleAdd={setState}/>
      </div>
    </ApolloProvider>
  );
}

export default App;
