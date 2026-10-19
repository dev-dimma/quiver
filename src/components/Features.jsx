import { motion } from "framer-motion";

const features = [
  {
    label: "Quiz",
    icon: (
      <>
        <rect x="3" y="3" width="8" height="6" rx="1.5" />
        <rect x="3" y="12" width="8" height="9" rx="1.5" />
        <rect x="13" y="3" width="8" height="18" rx="1.5" />
      </>
    ),
  },
  {
    label: "AudioBible",
    icon: (
      <>
        <path d="M12 5c-1.6-1.2-3.7-1.7-6-1.7v14.4c2.3 0 4.4.5 6 1.7 1.6-1.2 3.7-1.7 6-1.7V3.3c-2.3 0-4.4.5-6 1.7Z" />
        <path d="M12 5v14.4" />
      </>
    ),
  },
  {
    label: "Community",
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
    label: "Rhema",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2.4M12 19.6V22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2 12h2.4M19.6 12H22M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
      </>
    ),
  },
  {
    label: "Study",
    icon: (
      <>
        <path d="M6 3h9l4 4v13.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 6 3Z" />
        <path d="M9 11h6M9 14.5h6M9 7.5h3" />
        <path d="m14.5 16.5 3-3 1.4 1.4-3 3-1.9.5.5-1.9Z" />
      </>
    ),
  },
  {
    label: "Eschatology",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.5 20.5c1.2-3.6 3.5-5.4 6.5-5.4s5.3 1.8 6.5 5.4" />
      </>
    ),
  },
  {
    label: "Apologetics",
    icon: (
      <>
        <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h9A1.5 1.5 0 0 1 15 5.5v6A1.5 1.5 0 0 1 13.5 13H9l-3.5 3v-3H4.5A1.5 1.5 0 0 1 3 11.5v-6Z" />
        <path d="M17 8.5h1.5A1.5 1.5 0 0 1 20 10v6a1.5 1.5 0 0 1-1.5 1.5H17v3l-3.3-3H10" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-8 text-center md:py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="mb-6 flex items-center justify-center gap-2.5">
          <span className="h-3.5 w-3.5 rounded-sm bg-pink" />

          <span className="font-bold text-muted">Features</span>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto mb-16
            max-w-150
            font-display font-semibold
            leading-[1.4]
            text-[#3a343d]
            md:mb-16
          "
          style={{
            fontSize: "clamp(26px, 3vw, 34px)",
          }}
        >
          Everything a teenager needs to
          <br className="hidden md:block" />
          grow in the word, in one app
        </motion.h2>

        {/* Features grid */}
        <div
          className="
            mx-auto grid
            max-w-245
            grid-cols-2
            gap-x-6 gap-y-12
            sm:gap-x-10
            md:grid-cols-4
            md:gap-x-12 md:gap-y-12
          "
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.08,
              }}
              className="group flex flex-col items-center gap-4"
            >
              {/* Icon circle */}
              <div
                className="
                  flex h-26.25 w-26.25
                  items-center justify-center
                  rounded-full
                  bg-[#F0EEF0]
                  transition-all duration-300
                  group-hover:-translate-y-1.5
                  group-hover:bg-[#f6ecf3]
                  sm:h-30 sm:w-30
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    h-9.5 w-9.5
                    stroke-purple-panel
                    sm:h-10.5 sm:w-10.5
                  "
                >
                  {feature.icon}
                </svg>
              </div>

              {/* Feature name */}
              <span className="font-semibold text-[#54505a]">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
