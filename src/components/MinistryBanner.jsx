import { motion } from 'framer-motion'

export default function MinistryBanner() {
  return (
    <div className="text-center pt-5 pb-15 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-pink font-display font-bold mb-1"
        style={{ fontSize: 'clamp(20px,2.6vw,28px)' }}
      >
        Remnant Christian Network
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-bold text-[#eee7ec] leading-none"
        style={{ fontSize: 'clamp(40px,8vw,96px)' }}
      >
        Teens &amp; Children&rsquo;s
      </motion.div>
    </div>
  )
}
