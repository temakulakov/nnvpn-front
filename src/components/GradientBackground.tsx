import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        background: '#0a0a0a', // тёмный фон по краям
      }}
    >
      {/* 🔴 Центральное розовое свечение */}
      <motion.div
        style={{
          position: 'absolute',
          width: 1000,
          height: 1000,
          background: '#ff3c7b', // насыщенный розовый
          borderRadius: '50%',
          filter: 'blur(300px)',
          opacity: 0.7,
          top: '30%',
          left: '35%',
        }}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      {/* 🔵 Синее свечение по краям */}
      <motion.div
        style={{
          position: 'absolute',
          width: 1200,
          height: 1200,
          background: '#2b5dff', // насыщенный синий
          borderRadius: '50%',
          filter: 'blur(400px)',
          opacity: 0.6,
          top: '-30%',
          left: '-20%',
        }}
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      {/* 🔵 Второй синий — правый край */}
      <motion.div
        style={{
          position: 'absolute',
          width: 1000,
          height: 1000,
          background: '#2b5dff',
          borderRadius: '50%',
          filter: 'blur(350px)',
          opacity: 0.5,
          bottom: '-20%',
          right: '-15%',
        }}
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
