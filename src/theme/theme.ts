import { ThemeOptions, createTheme } from '@mui/material';

import { THEME_COLORS } from '../constants/theme.constants';

const shared: ThemeOptions = {
  palette: {
    primary: {
      main: THEME_COLORS.PINK_400,
    },
    secondary: {
      main: THEME_COLORS.BLUE_900,
      dark: THEME_COLORS.BLUE_900,
    },
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'shrikhand',
      color: THEME_COLORS.PINK_400,
    },
    h6: {
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
  },
};

const dark: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: THEME_COLORS.BLUE_1000,
      paper: THEME_COLORS.BLUE_800,
    },
    text: {
      primary: THEME_COLORS.BLUE_50,
    },
  },
};

const light: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: THEME_COLORS.PINK_50,
      paper: THEME_COLORS.BLUE_100,
    },
    text: {
      primary: THEME_COLORS.BLUE_900,
    },
  },
};

const darkMode = createTheme(shared, dark);
const lightMode = createTheme(shared, light);

export { darkMode, lightMode };
