import { motion } from 'framer-motion'
import heroPhone from '../assets/hero-phone.png'
import StoreButtons from './StoreButtons'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-38 text-center overflow-hidden bg-gradient-to-b from-maroon-dark via-maroon-mid to-[#fbf5fa]"
      style={{ backgroundImage: 'linear-gradient(180deg,var(--color-maroon-dark) 0%,var(--color-maroon-mid) 38%,#C9A9C4 78%,#fbf5fa 100%)' }}
    >
      <div
        aria-hidden
        className="absolute top-[16%] left-1/2 -translate-x-1/2 font-display font-extrabold text-white/10 whitespace-nowrap leading-none select-none pointer-events-none z-0"
        style={{ fontSize: 'min(24vw, 320px)', letterSpacing: '2px' }}
      >
        QUIVER
      </div>

      <div className="relative z-2 max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-white/75 text-[13px] font-medium tracking-wide mb-4.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" />
          Remnant Christian Network &middot; Teens &amp; Children&rsquo;s Ministry
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-white font-bold leading-tight max-w-3xl mx-auto mb-4.5"
          style={{ fontSize: 'clamp(32px,5vw,54px)' }}
        >
          Scripture, made for the way teenagers actually listen.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-[17px] max-w-lg mx-auto mb-8.5 leading-relaxed"
        >
          An audio Bible, live quiz clubs, and a feed for sharing devotions &mdash; built to bring
          teenagers closer to God&rsquo;s word, one chapter at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-14"
        >
          <StoreButtons variant="dark" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative z-2 max-w-[340px] mx-auto"
        >
          <img
            src={heroPhone}
            alt="Quiver app audio Bible screen showing the Book of John"
            className="w-full"
            style={{ filter: 'drop-shadow(0 40px 60px rgba(0,0,0,.45))' }}
          />
        </motion.div>
      </div>

      <div
        className="h-22.5 relative z-3 -mt-22.5"
        style={{ background: 'linear-gradient(180deg,rgba(251,245,250,0),#fbf5fa)' }}
      />
    </section>
  )
}
