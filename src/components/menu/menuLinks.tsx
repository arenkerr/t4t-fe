import {
  HomeRounded,
  PersonRounded,
  SettingsRounded,
  LogoutRounded,
  AddCircleRounded,
  LoginRounded,
} from '@mui/icons-material';

export const authLinks = [
  { to: 'dashboard', label: 'Home', icon: <HomeRounded /> },
  { to: 'profile', label: 'Profile', icon: <PersonRounded /> },
  { to: 'settings', label: 'Settings', icon: <SettingsRounded /> },
  { to: '/', label: 'Log Out', icon: <LogoutRounded /> },
];

export const publicLinks = [
  { to: 'sign-up', label: 'Sign Up', icon: <AddCircleRounded /> },
  { to: '/', label: 'Log In', icon: <LoginRounded /> },
];
