import React from 'react';
import { RecoilRoot } from 'recoil';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import PolylineIcon from '@mui/icons-material/Polyline';
import SettingsIcon from '@mui/icons-material/Settings';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import './App.css';

// Компонент анимированной кнопки
const AnimatedButton = ({ 
  children, 
  variant = "contained" as const, 
  startIcon, 
  onClick, 
  sx = {} 
}: {
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  startIcon?: React.ReactNode;
  onClick?: () => void;
  sx?: any;
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
      style={{ width: '100%'}}
    >
      <Button
        variant={variant}
        startIcon={startIcon}
        onClick={onClick}
        sx={sx}
        fullWidth
      >
        {children}
      </Button>
    </motion.div>
  );
};

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        {/* Основной контент */}
        <Box 
          sx={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          {/* Верхняя часть - можно добавить контент */}
          <Box sx={{ flex: 1, p: 2 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mt: 4 }}>
              Основной контент приложения
            </Typography>
          </Box>

          {/* Box, который прилипает к нижней части экрана */}
          <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: {
          xs: 'calc(100vw - 80px)',
        },
        maxWidth: 500,
        height: '40vh', // 40% от высоты экрана
        backgroundColor: '#0000007D',
        color: 'white',
        borderRadius: '16px',
        boxShadow:
          'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
        zIndex: 1000,
        marginBottom: '10px',
      }}
    >
  {/* Приписка о подписке */}
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'start',
      mb: 2,
    }}
  >
    <Box sx={{ textAlign: 'left',  justifyContent: 'start', alignItems: 'start' }}>
      <Typography variant="h6" sx={{ fontWeight: 1200 }}>
        Noname VPN
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 1200 }}>
        offline
      </Typography>
    </Box>
    <Box sx={{ textAlign: 'right' }}>
      <Typography variant="h6" sx={{ fontWeight: 1200 }}>
        до 7 июля 2025
      </Typography>
      <Typography variant="body2" sx={{ color: '#f0a336', fontWeight: 500 }}>
        подписка истекла
      </Typography>
    </Box>
  </Box>

     {/* Кнопки */}
   <AnimatedButton 
     variant="contained" 
     sx={{ marginBottom: '10px', borderRadius: 4, height: '50px'}} 
     startIcon={<PolylineIcon />}
   >
     Купить подписку
   </AnimatedButton>
   <AnimatedButton 
     variant="outlined"  
     sx={{ marginBottom: '10px', borderRadius: 4, height: '50px'}} 
     startIcon={<SettingsIcon />}
   >
     Установка и настройка
   </AnimatedButton>

   <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
     <Box sx={{ width: '50%' }}>
       <AnimatedButton
         variant="outlined"
         sx={{ borderRadius: 4, height: '50px'}}
         startIcon={<AccountCircleIcon />}
       >
         Профиль
       </AnimatedButton>
     </Box>
     <Box sx={{ width: '50%' }}>
       <AnimatedButton
         variant="outlined"
         sx={{ borderRadius: 4, height: '50px'}}
         startIcon={<PrivacyTipIcon />}
       >
         Поддержка
       </AnimatedButton>
     </Box>
   </Stack>

    </Box>

        </Box>
      </div>
    </RecoilRoot>
  );
}

export default App;
