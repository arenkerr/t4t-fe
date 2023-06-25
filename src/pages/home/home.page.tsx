import { Stack, Typography } from '@mui/material';

import { Button } from '../../components/button/button.component';
import { THEME_COLORS } from '../../theme/constants';

const Home = () => {
  return (
    <Stack spacing={2} justifyContent="center" textAlign="center">
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
      <Button label="Log In" variant="outlined" />
    </Stack>
  );
};

export default Home;
