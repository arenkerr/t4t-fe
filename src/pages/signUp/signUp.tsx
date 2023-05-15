import React from 'react';
import Container from '@mui/material/Container';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import { Button } from '@mui/material';

const SignUp = () => {
  const createUserMutation = loader('../../gql/createUser.gql');
  const [createUser, { loading, error, data }] =
    useMutation(createUserMutation);

  const mock = {
    variables: {
      password: 'password',
      username: 'newUser',
      email: 'newUser@newUser.org',
    },
  };

  if (loading) return <p>Loading</p>;
  if (error) return <p>${error.message}</p>;

  return (
    <Container>
      <Button onClick={() => createUser(mock)}>Submit</Button>
    </Container>
  );
};

export default SignUp;
