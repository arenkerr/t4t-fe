import { ReactNode } from 'react';
import { Container, Grid } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout
 */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Container>{children}</Container>
      </Grid>
    </Grid>
  );
};
