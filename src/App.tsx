import React from 'react';
import { Container } from '@mui/material';
import LogIn from './pages/logIn/logIn.page';
import SignUp from './pages/signUp/signUp.page';

const App = () => {
  return (
    <Container>
      <SignUp />
      <LogIn />
    </Container>
  );
};

export default App;
