import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const features = [
  {
    label: 'Quiz',
    icon: (
      <>
        <rect x="3" y="3" width="8" height="6" rx="1.5" />
        <rect x="3" y="12" width="8" height="9" rx="1.5" />
        <rect x="13" y="3" width="8" height="18" rx="1.5" />
      </>
    ),
  },
  {
    label: 'AudioBible',
    icon: (
      <>
        <path d="M12 5c-1.6-1.2-3.7-1.7-6-1.7v14.4c2.3 0 4.4.5 6 1.7 1.6-1.2 3.7-1.7 6-1.7V3.3c-2.3 0-4.4.5-6 1.7Z" />
        <path d="M12 5v14.4" />
      </>
    ),
  },
  {
    label: 'Community',
    icon: (
      <>
        <circle cx="12" cy="7" r="3" />
        <circle cx="5" cy="9" r="2.4" />
        <circle cx="19" cy="9" r="2.4" />
        <path d="M4 20c.6-2.8 2.3-4.4 4.4-5" />
        <path d="M20 20c-.6-2.8-2.3-4.4-4.4-5" />
        <path d="M7 21c1-3 2.7-4.6 5-4.6s4 1.6 5 4.6" />
      </>
    ),
  },
  {
    label: 'Rhema',
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2.4M12 19.6V22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2 12h2.4M19.6 12H22M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
      </>
    ),
  },
  {
    label: 'Study',
    icon: (
      <>
        <path d="M6 3h9l4 4v13.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 6 3Z" />
        <path d="M9 11h6M9 14.5h6M9 7.5h3" />
        <path d="m14.5 16.5 3-3 1.4 1.4-3 3-1.9.5.5-1.9Z" />
      </>
    ),
  },
  {
    label: 'Eschatology',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.5 20.5c1.2-3.6 3.5-5.4 6.5-5.4s5.3 1.8 6.5 5.4" />
      </>
    ),
  },
  {
    label: 'Apologetics',
    icon: (
      <>
        <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h9A1.5 1.5 0 0 1 15 5.5v6A1.5 1.5 0 0 1 13.5 13H9l-3.5 3v-3H4.5A1.5 1.5 0 0 1 3 11.5v-6Z" />
        <path d="M17 8.5h1.5A1.5 1.5 0 0 1 20 10v6a1.5 1.5 0 0 1-1.5 1.5H17v3l-3.3-3H10" />
      </>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="py-27.5 bg-white text-center">
      <div className="max-w-6xl mx-auto px-8">
        <SectionLabel center>Features</SectionLabel>
        <h2 className="font-display font-semibold text-[#3a343d] max-w-[560px] mx-auto mb-15" style={{ fontSize: 'clamp(24px,3vw,34px)' }}>
          Everything a teenager needs to grow in the word, in one app
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-11 max-w-[980px] mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-30 h-30 rounded-full bg-[#F0EEF0] flex items-center justify-center transition-all duration-250 group-hover:-translate-y-1.5 group-hover:bg-[#f6ecf3]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10.5 h-10.5 stroke-purple-panel"
                >
                  {f.icon}
                </svg>
              </div>
              <span className="font-semibold text-[15px] text-[#54505a]">{f.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
