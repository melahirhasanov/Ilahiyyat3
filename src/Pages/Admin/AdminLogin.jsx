import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Alert,
  CircularProgress
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // JSONBin API ilə əlaqə
      const response = await fetch('https://api.jsonbin.io/v3/b/681f501f8561e97a50111b06/latest', {
        headers: {
          'X-Master-Key': '$2a$10$TirNs59Qi3Qh3dKcRHAqh.TSvGR3IaH72vYPOM9AYWc0Bo/iJZawC '
        }
      });

      if (!response.ok) {
        throw new Error('Məlumatları yükləyərkən xəta baş verdi');
      }

      const data = await response.json();
      const users = data.record.MescidAdmin;

      // İstifadəçi axtarışı
      const user = users.find(u => 
        u.email === loginData.email && 
        u.password === loginData.password
      );

      if (user) {
        // Uğurlu login - localStorage və ya state management istifadə edə bilərsiniz
        localStorage.setItem('Admin', JSON.stringify(user));
        localStorage.setItem('userRole', 'admin');

        navigate('/mescidsekli'); // Uğurlu login sonrası yönləndirmə
      } else {
        throw new Error('Email və ya şifrə yanlışdır');
      }
    } catch (error) {
      console.error('Login xətası:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
            <Typography variant='h5' gutterBottom textAlign="center">
              Admin Girişi
            </Typography>
            
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            
            <form onSubmit={handleSubmit}>
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={loginData.email}
                onChange={handleChange}
                required
              />
              
              <TextField
                name="password"
                label="Şifrə"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={loginData.password}
                onChange={handleChange}
                required
              />
              
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                type="submit"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Daxil ol'}
              </Button>
            </form>
            
           
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminLogin;