import { ThemeOptions, createTheme } from '@mui/material';

const shared: ThemeOptions = {
  palette: {
    primary: {
      main: '#E9458B',
    },
    secondary: {
      main: '#0D253E',
    },
  },
};

const darkMode = createTheme(shared, {
  palette: {
    mode: 'dark',
    background: {
      default: '#091A2C',
      paper: '#263753',
    },
  },
});

const lightMode = createTheme(shared, {
  palette: {
    mode: 'light',
  },
});

export { darkMode, lightMode };
