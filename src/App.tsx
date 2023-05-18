import React from 'react';
import { Container } from '@mui/material';
import LogIn from './pages/logIn/logIn';
import SignUp from './pages/signUp/signUp';

const App = () => {
  return (
    <Container>
      <SignUp />
      <LogIn />
    </Container>
  );
};

export default App;
