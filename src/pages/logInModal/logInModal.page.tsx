import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';

import { createErrorDisplay } from '../../util/error.util';
import { Modal } from '../../components/modal/modal.component';
import { Button } from '../../components/button/button.component';

interface LogInModalProps {
  open: boolean;
  onClose: () => void;
}

const LogInModal = ({ open, onClose }: LogInModalProps) => {
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
    <Modal open={open} onClose={onClose} title={'Log In'}>
      <Button onClick={() => login(mock)} label="Log In" />
      {loginError && createErrorDisplay(loginError)}
    </Modal>
  );
};

export default LogInModal;
