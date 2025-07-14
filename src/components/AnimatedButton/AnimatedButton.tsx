import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

// 🎨 Кастомная кнопка через styled
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '16px',
  transition: 'background-color 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  '&:active': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

// 🎬 Motion-обёртка
const MotionButton = motion(StyledButton)

export default function AnimatedButton(props: ButtonProps) {
  return (
    <MotionButton
      {...props}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  )
}
