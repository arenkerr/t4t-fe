import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

import { darkMode, lightMode } from './theme/theme';
import { ThemeMode } from './types/theme.types';
import { useThemeMode } from './hooks/useThemeMode';
import { Button } from './components/button/button.component';
import { Layout } from './components/layout/layout.component';
import { UserProvider } from './context/user.context';

const App = () => {
  const [mode, toggleMode] = useThemeMode();

  return (
    <ThemeProvider theme={mode === ThemeMode.Dark ? darkMode : lightMode}>
      <UserProvider>
        <CssBaseline />
        <Layout>
          <Outlet />
          <Button
            label="toggle theme mode"
            onClick={() => toggleMode()}
          ></Button>
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
