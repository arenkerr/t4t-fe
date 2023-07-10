import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  SwipeableDrawer,
} from '@mui/material';
import { THEME_COLORS } from '../../constants/theme.constants';

interface MenuListProps {
  loggedIn: boolean;
  toggleMenu: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const MenuList = ({ loggedIn, toggleMenu }: MenuListProps) => {
  return (
    <Box
      role="presentation"
      onClick={toggleMenu(false)}
      onKeyDown={toggleMenu(false)}
      sx={{
        backgroundColor: 'none',
        width: '100vw',
        '@media (min-width:768px)': {
          maxWidth: 350,
        },
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{/* icon */}</ListItemIcon>
            <ListItemText primary={'text'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{/* icon */}</ListItemIcon>
            <ListItemText primary={'text'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

interface MenuProps {
  loggedIn: boolean;
  open: boolean;
  toggleMenu: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

/**
 * Menu
 */
export const Menu = ({ open, toggleMenu, loggedIn }: MenuProps) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={toggleMenu(false)}
      onOpen={toggleMenu(false)}
    >
      <MenuList loggedIn={loggedIn} toggleMenu={toggleMenu} />
    </SwipeableDrawer>
  );
};
