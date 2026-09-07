import { motion } from 'framer-motion'

const stats = [
  { value: '0', label: 'Screen Time' },
  { value: '100%', label: 'Word Time' },
  { value: 'GOD', label: 'Focused' },
]

export default function StatStrip() {
  return (
    <div className="bg-[#fbf5fa] text-center py-2.5 pb-7.5 flex justify-center flex-wrap" style={{ gap: 'min(10vw, 90px)' }}>
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <b
            className="block font-display font-extrabold text-[#e4dbe3]"
            style={{ fontSize: 'clamp(28px,4vw,46px)' }}
          >
            {s.value}
          </b>
          <span className="text-sm text-[#c8bdc6] font-semibold">{s.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
