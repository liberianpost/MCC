import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { PersonAdd as PersonAddIcon } from '@mui/icons-material';

const steps = ['Personal Information', 'Contact Details', 'Documentation'];

const RegisterCitizen: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#1a237e' }}>
        Register New Citizen
      </Typography>
      
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="address"
                label="Address"
                multiline
                rows={2}
                value={formData.address}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => prev - 1)}
            >
              Back
            </Button>
            
            <Button
              variant="contained"
              type="submit"
              startIcon={<PersonAddIcon />}
              sx={{
                background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
              }}
            >
              {activeStep === steps.length - 1 ? 'Register Citizen' : 'Next'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default RegisterCitizen;
