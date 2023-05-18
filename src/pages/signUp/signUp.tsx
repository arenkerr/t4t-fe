import React from 'react';
import Container from '@mui/material/Container';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import { Button } from '@mui/material';
import { createErrorDisplay } from '../../util/error.util';

const SignUp = () => {
  const createUserMutation = loader('../../gql/createUser.gql');
  const [createUser, { loading, error, data }] =
    useMutation(createUserMutation);

  const mock = {
    variables: {
      password: 'password',
      username: 'mockUser1',
      email: 'mockUser1@gmail.com',
    },
  };

  const signUpError = data?.login?.message || error?.message;
  if (loading) return <p>Loading</p>;

  // TODO: Show error if username/email already exists

  return (
    <Container>
      <Button onClick={() => createUser(mock)}>Submit</Button>
      {signUpError && createErrorDisplay(signUpError)}
    </Container>
  );
};

export default SignUp;
