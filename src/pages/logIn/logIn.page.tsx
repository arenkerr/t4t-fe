import React from 'react';
import Container from '@mui/material/Container';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import { Button } from '@mui/material';
import { createErrorDisplay } from '../../util/error.util';

const LogIn = () => {
  const logInMutation = loader('../../gql/login.gql');
  const [login, { loading, error, data }] = useMutation(logInMutation);

  const mock = {
    variables: {
      password: 'password123',
      username: 'benji',
    },
  };

  const loginError = data?.login?.message || error?.message;

  if (loading) return <p>Loading</p>;

  return (
    <Container>
      <Button onClick={() => login(mock)}>Log In</Button>
      {loginError && createErrorDisplay(loginError)}
    </Container>
  );
};

export default LogIn;
