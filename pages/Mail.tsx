import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from '../styles/style.module.scss'

const Mail = () => {
  const [showCopy, setShowCopy] = useState<boolean>(false)
  return (
    <div className={styles.emailBg} id="test">
      test
    </div>
  )
}

export default Mail
