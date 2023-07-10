import { ThemeOptions, createTheme } from '@mui/material';

import { THEME_COLORS } from '../constants/theme.constants';

const shared: ThemeOptions = {
  palette: {
    primary: {
      main: THEME_COLORS.PINK_500,
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
      color: THEME_COLORS.PINK_500,
    },
    h4: {
      fontFamily: 'shrikhand',
    },
    h6: {
      fontWeight: 'bold',
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
          textTransform: 'capitalize',
        },
        sizeLarge: {
          fontSize: '1.1725rem',
        },
        outlined: {
          border: '2px solid',
          borderColor: THEME_COLORS.PINK_500,
          ':hover': {
            border: '2px solid',
            borderColor: THEME_COLORS.PINK_600,
            color: THEME_COLORS.PINK_600,
            background: 'none',
          },
        },
        containedSecondary: {
          color: THEME_COLORS.BLUE_50,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: '100%',
          maxWidth: 400,
          padding: 24,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ':focus-within': {
            borderWidth: 0,
            outlineColor: THEME_COLORS.PINK_600,
            outline: 2,
            borderColor: THEME_COLORS.PINK_600,
          },
          fieldset: {
            borderWidth: 2,
            borderColor: THEME_COLORS.BLUE_900,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
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
      primary: THEME_COLORS.PINK_100,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: THEME_COLORS.BLUE_1000,
        },
        containedSecondary: {
          color: THEME_COLORS.PINK_100,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: THEME_COLORS.BLUE_900,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: THEME_COLORS.BLUE_50,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fieldset: {
            borderWidth: 2,
            borderColor: THEME_COLORS.PINK_100,
          },
        },
      },
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
      primary: THEME_COLORS.BLUE_800,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: THEME_COLORS.BLUE_800,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: THEME_COLORS.PINK_50,
        },
      },
    },
  },
};

const darkMode = createTheme(shared, dark);
const lightMode = createTheme(shared, light);

export { darkMode, lightMode };
