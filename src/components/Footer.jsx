import { motion } from "framer-motion";

import rcnLogo from "../assets/images/logo.png";
import believersLogo from "../assets/images/believers.png";
import audioTreasureLogo from "../assets/images/audio-treasure.png";

const partners = [
  {
    name: "Remnant Christian Network",
    logo: rcnLogo,
  },
  {
    name: "Believers",
    logo: believersLogo,
  },
  {
    name: "AudioTreasure",
    logo: audioTreasureLogo,
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-purple-panel-deep
        text-white
      "
    >
      {/* BACKGROUND GRADIENT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #702057 0%, #60184d 55%, #461238 100%)",
        }}
      />

      {/* SOFT PINK GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-32 -top-40
          h-80 w-80
          rounded-full
          bg-[#ff1493]/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-40 -right-32
          h-80 w-80
          rounded-full
          bg-[#ff1493]/10
          blur-3xl
        "
      />

      <div
        className="
          relative z-10
          mx-auto max-w-7xl
          px-6
          pt-16 pb-8
          sm:pt-20
          lg:pt-24
        "
      >
        {/* FOOTER DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* DECORATIVE LINE */}
          <div
            className="
              mx-auto mb-7
              h-1 w-14
              rounded-full
              bg-[#ff1493]
            "
          />

          <p
            className="
              text-sm
              leading-[1.9]
              text-white/80
              sm:text-base
              md:text-lg
            "
          >
            Quiver app, Quiver.ai and quiver.church are products of Remnant
            Christian Network Teens and Children&rsquo;s Ministry.
          </p>
        </motion.div>

        {/* PARTNER LOGOS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mx-auto mt-12
            flex max-w-3xl
            flex-wrap
            items-center
            justify-center
            gap-x-10 gap-y-8
            sm:mt-14
            md:gap-x-14
          "
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="
                group flex
                min-h-16
                items-center
                justify-center
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                loading="lazy"
                className="
                  h-auto
                  max-h-12
                  w-auto
                  max-w-30
                  object-contain
                  opacity-80
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:opacity-100
                  sm:max-h-14
                  sm:max-w-37.5
                "
              />
            </div>
          ))}
        </motion.div>

        {/* DIVIDER */}
        <div
          className="
            mx-auto mt-14 mb-7
            h-px w-full
            max-w-5xl
            bg-white/15
          "
        />

        {/* COPYRIGHT */}
        <div
          className="
            flex flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:flex-row
            sm:justify-between
          "
        >
          <p className="text-xs text-white/55 sm:text-sm">
            &copy; {new Date().getFullYear()} Quiver. All rights reserved.
          </p>

          <p className="text-xs text-white/45 sm:text-sm">
            Made with purpose. Built for the next generation.
          </p>
        </div>
      </div>
    </footer>
  );
}
