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
        <div className={styles.errorIcon}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00f510"
            strokeWidth="2"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <h1 className={styles.title}>Səhifə tapılmadı</h1>
        
        <div className={styles.buttons}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            className={styles.button}
            sx={{
              bgcolor: '#00f510',
              '&:hover': { bgcolor: '#00c40d' },
              minWidth: '120px'
            }}
          >
            Geri
          </Button>
          
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            className={styles.button}
            sx={{
              bgcolor: '#00f510',
              '&:hover': { bgcolor: '#00c40d' },
              minWidth: '120px'
            }}
          >
            Ana səhifə
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;