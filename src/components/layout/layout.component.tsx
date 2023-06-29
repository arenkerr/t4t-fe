import { ReactNode } from 'react';
import { Container, Grid } from '@mui/material';
import { AppBar } from '../appBar/appBar.component';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout
 */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBar />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Container>{children}</Container>
        </Grid>
      </Grid>
    </>
  );
};
