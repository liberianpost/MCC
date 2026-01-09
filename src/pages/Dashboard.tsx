import React from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  Card, 
  CardContent,
  LinearProgress 
} from '@mui/material';
import {
  People as PeopleIcon,
  PersonAdd as PersonAddIcon,
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const statCards = [
  { 
    title: 'Total Citizens', 
    value: '2,847', 
    icon: <PeopleIcon />, 
    color: '#2196f3',
    progress: 75
  },
  { 
    title: 'New Registrations', 
    value: '143', 
    icon: <PersonAddIcon />, 
    color: '#4caf50',
    progress: 45
  },
  { 
    title: 'Lookups Today', 
    value: '89', 
    icon: <SearchIcon />, 
    color: '#ff9800',
    progress: 60
  },
  { 
    title: 'Growth Rate', 
    value: '+12.5%', 
    icon: <TrendingUpIcon />, 
    color: '#9c27b0',
    progress: 82
  },
];

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#1a237e' }}>
        Dashboard Overview
      </Typography>
      
      <Grid container spacing={3}>
        {statCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                sx={{ 
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${card.color}20 0%, ${card.color}10 100%)`,
                  border: `1px solid ${card.color}30`,
                  overflow: 'hidden'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ 
                      p: 1.5, 
                      borderRadius: 2,
                      background: `${card.color}20`,
                      color: card.color
                    }}>
                      {card.icon}
                    </Box>
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                      {card.value}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'medium', mb: 1 }}>
                    {card.title}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={card.progress} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      backgroundColor: `${card.color}20`,
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: card.color
                      }
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      
      {/* Recent Activity Section */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Recent Citizen Registrations
            </Typography>
            {/* Add DataGrid or table here */}
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Quick Actions
            </Typography>
            {/* Add quick action buttons here */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
