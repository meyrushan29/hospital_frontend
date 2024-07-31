import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { 
  TextField, Button, Typography, Container, Box, 
  Paper, Grid, InputAdornment, CircularProgress,
  useMediaQuery, useTheme
} from '@mui/material';
import { 
  Person, Phone, CalendarToday, Place, AccessTime, LocalHospital
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // A red shade suitable for emergency services
    },
    secondary: {
      main: '#1976d2', // A blue shade for contrast
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
});

const FormField = ({ name, label, icon, type, rules, control, errors }) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    rules={rules}
    render={({ field: { ref, ...inputProps } }) => (
      <TextField
        {...inputProps}
        inputRef={ref}
        fullWidth
        label={label}
        variant="outlined"
        type={type}
        error={!!errors[name]}
        helperText={errors[name]?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ),
        }}
      />
    )}
  />
);

const SubmitButton = ({ isSubmitting }) => (
  <Button 
    type="submit" 
    variant="contained" 
    color="primary"
    size="large"
    fullWidth
    disabled={isSubmitting}
    startIcon={isSubmitting ? <CircularProgress size={20} /> : <LocalHospital />}
    sx={{ 
      py: 1.5,
      textTransform: 'none',
      fontSize: { xs: '1rem', sm: '1.1rem' },
      fontWeight: 'bold'
    }}
  >
    {isSubmitting ? 'Booking...' : 'Book Ambulance'}
  </Button>
);

const AmbulanceBooking = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      // Handle successful submission
      navigate('/myamb-booking');
    } catch (error) {
      console.error('Submission error:', error);
      // Handle error (e.g., show error message)
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    { name: 'name', label: 'Name', icon: <Person />, type: 'text', rules: { required: 'Name is required' } },
    { 
      name: 'phoneNumber', 
      label: 'Phone Number', 
      icon: <Phone />, 
      type: 'tel',
      rules: { 
        required: 'Phone number is required',
        pattern: {
          value: /^\d{10}$/,
          message: 'Please enter a valid 10-digit phone number'
        }
      } 
    },
    { name: 'date', label: 'Date', icon: <CalendarToday />, type: 'date', rules: { required: 'Date is required' } },
    { name: 'destination', label: 'Destination', icon: <Place />, type: 'text', rules: { required: 'Destination is required' } },
    { name: 'time', label: 'Time', icon: <AccessTime />, type: 'time', rules: { required: 'Time is required' } },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ mt: { xs: 6, sm: 10 }, px: { xs: 4, sm: 6 } }}>
        <Paper elevation={3} sx={{ p: { xs: 3, sm: 4 }, borderRadius: 2 }}>
          <Box sx={{ mb: 3, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: 1 }}>
            <LocalHospital color="primary" fontSize="large" aria-hidden="true" />
            <Typography variant={isMobile ? "h5" : "h4"} component="h1" align={isMobile ? "center" : "left"} color="primary">
              Ambulance Booking
            </Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2}>
              {inputFields.map((field) => (
                <Grid item xs={12} key={field.name}>
                  <FormField
                    name={field.name}
                    label={field.label}
                    icon={field.icon}
                    type={field.type}
                    rules={field.rules}
                    control={control}
                    errors={errors}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <SubmitButton isSubmitting={isSubmitting} />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default AmbulanceBooking;