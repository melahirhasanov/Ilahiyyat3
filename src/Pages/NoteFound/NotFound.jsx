import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Səhifə tapılmadı</h1>
        <p className={styles.message}>
          Axtardığınız səhifə mövcud deyil, silinib və ya adı dəyişdirilib.
        </p>
        
        <div className={styles.buttons}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            className={styles.button}
            sx={{
              bgcolor: '#00f510',
              '&:hover': { bgcolor: '#00c40d' }
            }}
          >
            Geri qayıt
          </Button>
          
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            className={styles.button}
            sx={{
              bgcolor: '#00f510',
              '&:hover': { bgcolor: '#00c40d' }
            }}
          >
            Əsas səhifə
          </Button>
        </div>
        
        <div className={styles.illustration}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00f510"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;