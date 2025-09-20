import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {logo} from "../assets/images";


export default function Header() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={2}
        sx={{
          backgroundColor: '#fff',
          color: '#333',
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: '80px', md: '100px' }, // increased height
            display: 'flex',
            justifyContent: 'space-between',
            px: { xs: 2, md: 4 }, // padding for left/right
          }}
        >
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Box
              component="img"
              src={logo}
              alt="Sri Durga Enterprises"
              sx={{ 
                height: { xs: 60, md: 80 }, // bigger logo
                width: { xs: 120, md: 160 }, // increased width
              }}
            />
          </Box>

          {/* Desktop Nav */}
          {isMdUp ? (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  color="inherit"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' }, // increased nav item font
                    minWidth: { xs: 80, md: 100 }, // button width
                    padding: { xs: '6px 12px', md: '10px 16px' } // button padding
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setOpen(true)}
              aria-label="menu"
            >
              <MenuIcon sx={{ fontSize: 32 }} /> {/* bigger menu icon */}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{ width: 240 }}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton component={RouterLink} to={item.to}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
