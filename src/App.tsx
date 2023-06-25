import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { darkMode, lightMode } from './theme/theme';
import { Button } from './components/button/button.component';
import { ThemeMode } from './types/theme.types';
import { useThemeMode } from './hooks/useThemeMode';

const App = () => {
  const [mode, toggleMode] = useThemeMode();

  return (
    <ThemeProvider theme={mode === ThemeMode.Dark ? darkMode : lightMode}>
      <CssBaseline />
      <Button label="toggle theme mode" onClick={() => toggleMode()}></Button>
    </ThemeProvider>
  );
};

export default App;
