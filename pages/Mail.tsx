import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Mail = () => {
  const [showCopy, setShowCopy] = useState<boolean>(false)
  return (
    <div className="container mx-auto">
      <div className="pt-10">
        {/* <div className="rounded-lg p-2 bg-white">
          <p className="font-poppins text-lg text-slate-700">
            I&apos;m currently available to get involved in new projects, so get
            in touch if you&apos;d like to work together.
          </p>
          <p className="font-poppins text-lg text-slate-700">
            Email me at{' '}
            <span
              className="hover:cursor-pointer hover:underline"
              onClick={() => {
                navigator.clipboard.writeText('ananya.dhananjaya1998@gmail.com')
                setShowCopy(true)
                setInterval(() => {
                  setShowCopy(false)
                }, 2000)
              }}
            >
              ananya.dhananjaya1998@gmail.com
            </span>
          </p>
        </div> */}
        <AnimatePresence>
          {!showCopy && (
            <motion.div>
              <div>Copied</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Mail
