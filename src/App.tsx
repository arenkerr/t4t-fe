import React from 'react';
import { useQuery, gql } from '@apollo/client';
import logo from './logo.svg';
import './App.css';

const GET_TEST_DATA = gql`
  query GetBooks {
    books {
      author
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_TEST_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
