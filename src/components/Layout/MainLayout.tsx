import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Typography, useTheme } from '@mui/material';
import { Menu as MenuIcon, Notifications, AccountCircle } from '@mui/icons-material';
import Sidebar from './Sidebar';

const MainLayout: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: '#f5f7fa' }}>
        <AppBar 
          position="static" 
          elevation={0}
          sx={{ 
            background: 'white',
            color: theme.palette.text.primary,
            borderRadius: 3,
            mb: 3
          }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Citizen Management System
            </Typography>
            
            <IconButton sx={{ mr: 2 }}>
              <Notifications />
            </IconButton>
            
            <IconButton>
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
