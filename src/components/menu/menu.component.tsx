import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import { THEME_COLORS } from '../../constants/theme.constants';
import { RouterLink } from '../routerLink/routerLink.component';
import { ReactNode } from 'react';
import { authLinks, publicLinks } from './menuLinks';

interface MenuLinkProps {
  to: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const MenuLink = ({ to, label, icon, onClick }: MenuLinkProps) => {
  return (
    <>
      <ListItem disablePadding onClick={onClick}>
        <ListItemButton>
          <ListItemIcon>
            <Typography color="primary">{icon}</Typography>
          </ListItemIcon>
          <ListItemText
            disableTypography={true}
            primary={
              <RouterLink
                to={to}
                label={label}
                variant={'h6'}
                color={THEME_COLORS.PINK_100}
                underline={'none'}
              />
            }
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

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
        {loggedIn
          ? authLinks.map((link) => <MenuLink key={link.label} {...link} />)
          : publicLinks.map((link) => <MenuLink key={link.label} {...link} />)}
      </List>

      <Divider />
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
