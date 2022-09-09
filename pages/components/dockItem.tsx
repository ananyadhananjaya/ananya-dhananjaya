import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion'
import useRaf from '@rooks/use-raf'

import { useRef, useState } from 'react'
import styles from '../../styles/DockItem.module.scss'

interface props {
  mouseX: MotionValue<number | null>
  appID: any
  index: number
  title: string
}

export function DockItem({ title = 'hello', mouseX, appID }: props) {
  const imgRef = useRef<HTMLImageElement>()

  const { width } = useDockHoverAnimation(mouseX, imgRef)

  return (
    <button aria-label={`Launch ${title}`} className={styles.dockItemButton}>
      <motion.span>
        <motion.img
          ref={imgRef}
          src={`/app-icons/${appID}/256.png`}
          draggable={false}
          style={{ width }}
          alt={`${title} app icon`}
        />
      </motion.span>
    </button>
  )
}

const baseWidth = 57.6
const distanceLimit = baseWidth * 6
const beyondTheDistanceLimit = distanceLimit + 1
const distanceInput = [
  -distanceLimit,
  -distanceLimit / 1.25,
  -distanceLimit / 2,
  0,
  distanceLimit / 2,
  distanceLimit / 1.25,
  distanceLimit
]
const widthOutput = [
  baseWidth,
  baseWidth * 1.1,
  baseWidth * 1.414,
  baseWidth * 2,
  baseWidth * 1.414,
  baseWidth * 1.1,
  baseWidth
]

const useDockHoverAnimation = (
  mouseX: MotionValue<number | null>,
  ref: RefObject<HTMLImageElement>
) => {
  const distance = useMotionValue(beyondTheDistanceLimit)

  const widthPX: MotionValue<number> = useSpring(
    useTransform(distance, distanceInput, widthOutput),
    {
      stiffness: 1300,
      damping: 82
    }
  )

  const width = useTransform(widthPX, (width) => `${width / 16}rem`)

  useRaf(() => {
    const el = ref.current
    const mouseXVal = mouseX
    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect()

      const imgCenterX = rect.left + rect.width / 2

      // difference between the x coordinate value of the mouse pointer
      // and the img center x coordinate value
      const distanceDelta = mouseXVal - imgCenterX
      distance.set(distanceDelta)
      return
    }

    distance.set(beyondTheDistanceLimit)
  }, true)

  return { width }
}
