import { motion } from 'framer-motion'
import { useState } from 'react'
import { DockItem } from './components/dockItem'
import { appsConfig } from './components/data/apps/apps-config'
import styles from '../styles/Index.module.scss'

function App() {
  const [flag, setFlag] = useState<number>(0)
  const [mouseX, setMouseX] = useState<any>(null)

  const handleRotate = () => {
    setFlag(-8)
  }
  const handleBack = () => {
    setFlag(0)
  }
  return (
    <div className="container mx-auto h-screen text-3xl text-slate-500 px-20">
      <div className="md:pt-32 pt-10">
        <p className="text-4xl font-mono">Ananya Dhananjaya</p>
        <p className="text-lg font-mono">
          Frontend Engineer in love with Web Aesthetics.
        </p>
      </div>
      <div className="bg-slate-600 w-1/3 mt-2 rounded border-2"></div>
      <div className="md:pt-10 pt-4">
        <p className="text-base font-mono">
          Web designer and developer from Bangalore, India. I create custom
          websites to help business to do better online. I enjoy buiding
          everything from small business sites to rich interactive web apps. If
          you are a business seeking a web presence, an employer looking to hire
          or a fellow developer looking to collaborate, you can get in touch
          with me!
        </p>
      </div>
      {/* <div className="justify-center items-center flex pb-10">
        <div className="bg-slate-100 fixed bottom-4 flex gap-2 px-4 py-2 rounded-2xl ">
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.2,
              transition: { duration: 0.7 }
            }}
          >
            <div className="w-14 h-14 bg-slate-400 rounded-xl"></div>
          </motion.div>
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.2,
              transition: { duration: 0.7 }
            }}
            initial={false}
            animate={{ y: flag, transition: { duration: 0.2 } }}
          >
            <div className="w-14 h-14 bg-slate-400 rounded-xl"></div>
          </motion.div>
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.2,
              transition: { duration: 0.2 }
            }}
          >
            <div
              className="w-14 h-14 bg-slate-400 rounded-xl"
              onMouseEnter={handleRotate}
              onMouseLeave={handleBack}
            ></div>
          </motion.div>
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.2,
              transition: { duration: 0.2 }
            }}
            animate={{ y: flag, transition: { duration: 0.2 } }}
          >
            <div className="w-14 h-14 bg-slate-400 rounded-xl"></div>
          </motion.div>
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.2,
              transition: { duration: 0.7 }
            }}
          >
            <div className="w-14 h-14 bg-slate-400 rounded-xl"></div>
          </motion.div>
        </div>
      </div> */}

      <section id="dock" className={styles.container}>
        <div
          className={styles.dockEl}
          onMouseMove={(event) => setMouseX(event.nativeEvent.x)}
          onMouseLeave={() => setMouseX(null)}
        >
          {Object.keys(appsConfig).map((appID, i) => (
            <div key={appID} className={styles.divider}>
              {appsConfig[appID].dockBreaksBefore && (
                <div key={`${appID}-divider`} aria-hidden="true" />
              )}
              <DockItem
                index={i}
                key={appID}
                mouseX={mouseX}
                appID={appID}
                title={appID}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
