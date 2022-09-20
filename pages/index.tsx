import { motion } from 'framer-motion'
import { useState } from 'react'
import { DockItem } from './components/dockItem'
import { appsConfig } from './components/data/apps/apps-config'
import styles from '../styles/Index.module.scss'

function App() {
  const [mouseX, setMouseX] = useState<any>(null)

  return (
    <div className="mx-auto h-screen text-3xl text-slate-500 px-20">
      <div className="md:pt-32 pt-10">
        <p className="text-4xl font-mono">Ananya Dhananjaya</p>
        <p className={styles.header}></p>
      </div>
      <div className="bg-slate-600 w-1/3 mt-2 rounded border-2"></div>
      <div className="md:pt-10 pt-4">
        <p className="text-base font-poppins">
          Web designer and developer from Bangalore, growing a career in tech. I
          create custom websites to help business to do better online. I enjoy
          buiding everything from small business sites to rich interactive web
          apps. If you are a business seeking a web presence, an employer
          looking to hire or a fellow developer looking to collaborate, you can
          get in touch with me!
        </p>
      </div>
    </div>
  )
}

export default App
