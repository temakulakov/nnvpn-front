import React from 'react'
import { motion } from 'framer-motion'
import styles from './Box.module.scss'

type BoxProps = {
  children: React.ReactNode
  path: string
}

export default function Box({ children, path }: BoxProps) {
  const isRoot = path === '/'
  const isSubscribe = path === '/subscribe'
  const isCenter = !isRoot && !isSubscribe
  const background = '#00000061'
  // const background = 'white'
  const height = isRoot ? '40vh' : isSubscribe ? '60vh' : '60vh'
  return (
    <motion.div
      className={styles.boxContainer}
      layout
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      exit={{ y: 200 }}
    >
      <motion.div className={styles.boxInner} 
      layout
      style={{ background }}
      initial={{ height }}
      animate={{ height }}
      exit={{ height }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
