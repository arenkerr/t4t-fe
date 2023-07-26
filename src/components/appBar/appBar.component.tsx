import { useState } from 'react';
import { IconButton, Toolbar } from '@mui/material';

import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '../menu/menu.component';
import { THEME_COLORS } from '../../constants/theme.constants';

/**
 * AppBar
 */
export const AppBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu =
    (toggle: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(toggle);
    };
  return (
    <>
      <MuiAppBar position="static" color="secondary" enableColorOnDark>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            sx={{ color: THEME_COLORS.PINK_100 }}
            aria-label="menu"
            onClick={toggleMenu(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      <Menu loggedIn={false} open={open} toggleMenu={toggleMenu} />
    </>
  );
};
