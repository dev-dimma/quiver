import { motion } from 'framer-motion'
import missionGirl from '../assets/mission-girl.png'
import SectionLabel from './SectionLabel'

export default function Mission() {
  return (
    <section id="mission" className="pt-10 pb-27.5 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="bg-card-gray rounded-[36px] grid md:grid-cols-[1.05fr_1fr] items-end pt-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-5 pb-16 md:pl-16 max-w-[460px]"
          >
            <SectionLabel>Mission</SectionLabel>
            <h2 className="text-lg leading-[1.8] font-normal text-[#5b5560]">
              Audio Bible at your fingertips&hellip; In a fast-paced, short-reading,
              limited-attention-span generation, following God&rsquo;s word through a listening
              mode seamlessly aids meditation and encounters with God &mdash; a core, major drive
              behind Quiver.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="justify-self-center self-end relative top-7 max-w-[300px] w-4/5"
          >
            <img
              src={missionGirl}
              alt="Teenager wearing headphones, listening to the Quiver audio Bible"
              className="w-full block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
