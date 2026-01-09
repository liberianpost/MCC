import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  PersonAdd as PersonAddIcon,
  Search as SearchIcon,
  Analytics as AnalyticsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';

const drawerWidth = 280;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Citizen Lookup', icon: <SearchIcon />, path: '/lookup' },
  { text: 'Register Citizen', icon: <PersonAddIcon />, path: '/register' },
  { text: 'All Citizens', icon: <PeopleIcon />, path: '/citizens' },
  { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'linear-gradient(180deg, #1a237e 0%, #311b92 100%)',
          color: 'white',
          border: 'none',
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ 
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #00e5ff, #2979ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          MCC PORTAL
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.7, mt: 1 }}>
          Digital Liberia • Citizen Management
        </Typography>
      </Box>

      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            margin: '0 auto',
            border: '3px solid #00e5ff',
            boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)'
          }}
          src="/api/placeholder/80/80"
        />
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
          Welcome Admin
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          Administrator
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 2 }} />

      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              color: 'rgba(255,255,255,0.7)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
              },
              '&.active': {
                backgroundColor: 'rgba(0, 229, 255, 0.1)',
                color: '#00e5ff',
                borderRight: '3px solid #00e5ff',
              },
              mb: 1,
              mx: 2,
              borderRadius: 2,
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ fontWeight: 'medium' }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 2 }} />
        <ListItem
          button
          sx={{
            color: '#ff5252',
            '&:hover': {
              backgroundColor: 'rgba(255, 82, 82, 0.1)',
            },
            borderRadius: 2,
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
