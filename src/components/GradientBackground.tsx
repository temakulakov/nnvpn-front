import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        background: '#0a0a0a', // темный фон по краям
      }}
    >
      {/* Первый светлый градиент */}
      <motion.div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          background: '#afb3d9', // светлая версия #242834
          borderRadius: '50%',
          filter: 'blur(240px)',
          opacity: 0.85,
          top: '25%',
          left: '20%',
        }}
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      {/* Второй светлый градиент */}
      <motion.div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          background: '#70811E', // светлая версия #70811E
          borderRadius: '50%',
          filter: 'blur(240px)',
          opacity: 0.75,
          bottom: '15%',
          right: '15%',
        }}
        animate={{
          x: [0, -60, 60, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
