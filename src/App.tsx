import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { darkMode, lightMode } from './theme/theme';
import { ThemeMode } from './types/theme.types';
import { useThemeMode } from './hooks/useThemeMode';
import { Button } from './components/button/button.component';
import { Layout } from './components/layout/layout.component';
import Home from './pages/home/home.page';

const App = () => {
  const [mode, toggleMode] = useThemeMode();

  return (
    <ThemeProvider theme={mode === ThemeMode.Dark ? darkMode : lightMode}>
      <CssBaseline />
      <Layout>
        <Home />
        <Button label="toggle theme mode" onClick={() => toggleMode()}></Button>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
