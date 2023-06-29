import { IconButton, Toolbar } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * AppBar
 */
export const AppBar = () => {
  return (
    <MuiAppBar position="static" color="secondary" enableColorOnDark>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};
