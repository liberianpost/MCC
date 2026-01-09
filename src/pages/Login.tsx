import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  Fade,
  InputAdornment,
  IconButton
} from '@mui/material';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
  Security as SecurityIcon
} from '@mui/icons-material';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // For demo, accept any email/password
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <Paper
        elevation={24}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 420,
          borderRadius: 4,
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <SecurityIcon sx={{ fontSize: 60, color: '#1a237e', mb: 2 }} />
          <Typography variant="h4" sx={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #1a237e, #00e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            MCC PORTAL
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Digital Liberia • Citizen Management
          </Typography>
        </Box>

        {error && (
          <Fade in={!!error}>
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
              {error}
            </Alert>
          </Fade>
        )}

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            size="large"
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 2,
              background: 'linear-gradient(45deg, #1a237e, #00e5ff)',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            SIGN IN
          </Button>
        </form>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            For demo purposes, any credentials will work
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
