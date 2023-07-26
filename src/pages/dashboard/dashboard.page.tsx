import { Stack, Typography } from '@mui/material';
import { useContext } from 'react';

import { UserContext } from '../../context/user.context';

const Dashboard = () => {
  const user = useContext(UserContext);

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      textAlign="center"
      minHeight="70vh"
    >
      <Typography variant="h2" gutterBottom={true}>
        Hello, {user?.username}!
      </Typography>
    </Stack>
  );
};

export default Dashboard;
