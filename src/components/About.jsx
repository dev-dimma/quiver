import { motion } from 'framer-motion'
import aboutPhones from '../assets/about-phones.png'
import logoFlame from '../assets/logo-flame.png'
import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section
      id="about"
      className="relative rounded-t-[56px] py-25 text-white overflow-hidden"
      style={{ backgroundImage: 'linear-gradient(135deg,var(--color-purple-panel) 0%,var(--color-purple-panel-deep) 100%)' }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(255,255,255,.06), transparent 40%), radial-gradient(circle at 85% 80%, rgba(255,255,255,.05), transparent 45%)',
        }}
      />
      <div className="relative z-2 max-w-6xl mx-auto px-8 grid md:grid-cols-[1fr_1.15fr] items-center gap-12.5">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <img
            src={aboutPhones}
            alt="Quiver app screens: Bible clubs, audio Bible reader, and the devotion feed"
            className="w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-1 md:order-2 text-left"
        >
          <img src={logoFlame} alt="" className="w-11.5 mb-6.5 opacity-90" />
          <SectionLabel light>About</SectionLabel>
          <p
            className="font-normal text-white/92 max-w-[480px] leading-relaxed"
            style={{ fontSize: 'clamp(18px,2.2vw,24px)' }}
          >
            The Quiver app allows teenagers in Christ to express themselves &mdash; sharing their
            contemplations, devotions, and scriptural insights born out of personal meditation and
            experience, in ways that foster fellowship digitally.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
