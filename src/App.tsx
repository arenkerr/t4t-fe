import React from 'react';
import { useQuery, gql } from '@apollo/client';
import logo from './logo.svg';
import './App.css';
import SignUp from './pages/signUp/signUp';

// const GET_TEST_DATA = gql`
//   query GetBooks {
//     books {
//       author
//       title
//     }
//   }
// `;

function App() {
  // const { loading, error, data } = useQuery(GET_TEST_DATA);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  // console.log(data);
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
