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
  StepLabel,
  Card,
  CardContent
} from '@mui/material';
import { PersonAdd as PersonAddIcon } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const steps = ['Personal Information', 'Contact Details', 'Documentation'];

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
});

const RegisterCitizen: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
  };

  const handleSubmit = async (values: any) => {
    console.log('Submitting:', values);
    // Handle Firebase submission here
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
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="firstName"
                    label="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                    variant="outlined"
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="lastName"
                    label="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                    variant="outlined"
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email Address"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    variant="outlined"
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
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
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
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
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976d2, #1ea1d2)',
                    }
                  }}
                >
                  {activeStep === steps.length - 1 ? 'Register Citizen' : 'Next'}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default RegisterCitizen;
