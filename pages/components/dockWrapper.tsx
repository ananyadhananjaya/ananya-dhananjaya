import { DockItem } from './dockItem'
import { appsConfig } from './data/apps/apps-config'
import styles from '../../styles/Index.module.scss'
import { useState } from 'react'

export default function DockWrapper() {
  const [mouseX, setMouseX] = useState<any>(null)

  return (
    <div>
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
                title={appsConfig[appID].title}
                link={appsConfig[appID].link}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
