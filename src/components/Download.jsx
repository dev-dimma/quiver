import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import StoreButtons from './StoreButtons'

export default function Download() {
  return (
    <section id="download" className="pt-10 pb-32.5 text-center bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <SectionLabel center>Download</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold max-w-[520px] mx-auto mb-10"
          style={{ fontSize: 'clamp(26px,3.4vw,38px)' }}
        >
          Get Quiver on your phone today
        </motion.h2>
        <StoreButtons variant="light" />
      </div>
    </section>
  )
}
