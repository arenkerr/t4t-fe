import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import { Stack, Typography } from '@mui/material';

import { createErrorDisplay } from '../../util/error.util';
import { Modal } from '../../components/modal/modal.component';
import { Button } from '../../components/button/button.component';
import { TextField } from '../../components/textField/textField.component';

interface LogInModalProps {
  open: boolean;
  onClose: () => void;
}

const LogInModal = ({ open, onClose }: LogInModalProps) => {
  const logInMutation = loader('../../gql/login.gql');
  const [login, { loading, error, data }] = useMutation(logInMutation);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      variables: {
        username: formData.get('username'),
        password: formData.get('password'),
      },
    };

    login(payload);
  };

  const loginError = data?.login?.message || error?.message;

  // TODO: Loading component
  if (loading) return <p>Loading</p>;

  return (
    <Modal open={open} onClose={onClose} title={'Log In'}>
      <Stack component="form" onSubmit={handleSubmit} spacing={2} mt={2}>
        <TextField
          id="login-input-username"
          name="username"
          required
          label={'Username'}
        />
        <TextField
          id="login-input-password"
          name="password"
          type="password"
          required
          label={'Password'}
        />
        <Button type="submit" label="Log In" color="secondary" />
        <Typography color="error">
          {loginError && createErrorDisplay(loginError)}
        </Typography>
      </Stack>
    </Modal>
  );
};

export default LogInModal;
