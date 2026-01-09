import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  LinearProgress,
  Avatar,
  Stack
} from '@mui/material';
import {
  People as PeopleIcon,
  PersonAdd as PersonAddIcon,
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon,
  Notifications as NotificationsIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { title: 'Total Citizens', value: '2,847', icon: <PeopleIcon />, color: '#2196f3', progress: 75, change: '+12%' },
    { title: 'New Registrations', value: '143', icon: <PersonAddIcon />, color: '#4caf50', progress: 45, change: '+8%' },
    { title: 'Lookups Today', value: '89', icon: <SearchIcon />, color: '#ff9800', progress: 60, change: '+23%' },
    { title: 'Growth Rate', value: '+12.5%', icon: <TrendingUpIcon />, color: '#9c27b0', progress: 82, change: '+5%' },
  ];

  const recentActivities = [
    { id: 1, name: 'John Doe', action: 'Registered', time: '10 min ago', status: 'success' },
    { id: 2, name: 'Jane Smith', action: 'Profile Updated', time: '25 min ago', status: 'success' },
    { id: 3, name: 'Robert Johnson', action: 'Document Upload', time: '1 hour ago', status: 'pending' },
  ];

  const quickActions = [
    { label: 'Register Citizen', icon: <PersonAddIcon />, color: '#4caf50', path: '/register' },
    { label: 'Search Citizen', icon: <SearchIcon />, color: '#2196f3', path: '/search' },
    { label: 'View Reports', icon: <TrendingUpIcon />, color: '#9c27b0', path: '/reports' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a237e' }}>
            MCC Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Citizen Management System
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
        </Box>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    p: 1.5, 
                    borderRadius: 2, 
                    bgcolor: `${stat.color}20`, 
                    color: stat.color 
                  }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="body2" sx={{ color: stat.color, fontWeight: 'bold' }}>
                    {stat.change}
                  </Typography>
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>{stat.value}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{stat.title}</Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={stat.progress} 
                  sx={{ 
                    height: 8, 
                    borderRadius: 4,
                    bgcolor: `${stat.color}20`,
                    '& .MuiLinearProgress-bar': { bgcolor: stat.color }
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>Quick Actions</Typography>
              <Stack spacing={2}>
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    fullWidth
                    startIcon={action.icon}
                    onClick={() => navigate(action.path)}
                    sx={{
                      justifyContent: 'flex-start',
                      p: 2,
                      borderRadius: 2,
                      bgcolor: `${action.color}15`,
                      color: action.color,
                      border: `1px solid ${action.color}30`,
                      '&:hover': { bgcolor: `${action.color}25` }
                    }}
                  >
                    {action.label}
                  </Button>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Recent Activity</Typography>
                <Button endIcon={<ArrowForwardIcon />}>
                  View All
                </Button>
              </Box>
              <Stack spacing={2}>
                {recentActivities.map((activity) => (
                  <Box key={activity.id} sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 2, 
                    borderRadius: 2,
                    bgcolor: 'grey.50'
                  }}>
                    {activity.status === 'success' ? 
                      <CheckCircleIcon color="success" /> : 
                      <ScheduleIcon color="warning" />
                    }
                    <Box sx={{ ml: 2, flex: 1 }}>
                      <Typography fontWeight="medium">{activity.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{activity.action}</Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">{activity.time}</Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ mt: 3, borderRadius: 3, bgcolor: 'primary.main', color: 'white' }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            Welcome to MCC Portal
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Manage citizen registrations, lookups, and analytics efficiently.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
