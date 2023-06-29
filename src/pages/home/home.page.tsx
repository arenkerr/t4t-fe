import { Stack, Typography } from '@mui/material';

import { useState } from 'react';

import { Button } from '../../components/button/button.component';
import { THEME_COLORS } from '../../constants/theme.constants';
import LogInModal from '../logInModal/logInModal.page';

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      textAlign="center"
      minHeight="70vh"
    >
      <Typography variant="h1" gutterBottom={true}>
        t4t
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        alignItems="center"
      >
        <Typography variant="h6">Mutual Aid</Typography>
        <Typography color={THEME_COLORS.PINK_400}>•</Typography>
        <Typography variant="h6">Community</Typography>
        <Typography color={THEME_COLORS.PINK_400}>•</Typography>
        <Typography variant="h6">Resources</Typography>
      </Stack>
      <Button label="Sign Up" />
      <Button label="Log In" variant="outlined" onClick={handleOpen} />
      <LogInModal open={open} onClose={handleClose} />
    </Stack>
  );
};

export default Home;
