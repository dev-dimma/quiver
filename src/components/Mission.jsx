import { motion } from "framer-motion";
import quiverGirl from "../assets/images/quiver-girl.png";

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative bg-white pt-18 pb-20 md:pt-35 md:pb-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* MAIN MISSION CONTAINER */}
        <div
          className="
            relative isolate
            grid items-center
            min-h-[540px]
            rounded-[36px]
            md:grid-cols-[1.05fr_0.95fr]
            md:min-h-[530px]
            lg:min-h-[550px]
          "
        >
          {/* BACKGROUND - clipped to rounded container */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              overflow-hidden
              rounded-[36px]
            "
            style={{
              background:
                "linear-gradient(115deg, #f1eff1 0%, #f4edf2 48%, #f6dce9 100%)",
            }}
          >
            {/* Large pink circular glow */}
            <div
              className="
                absolute
                -right-[15%] -bottom-[45%]
                h-[115%] w-[85%]
                rounded-full
                opacity-70 blur-xl
              "
              style={{
                background:
                  "radial-gradient(circle, #e89ac9 0%, #f1c7e1 45%, transparent 75%)",
              }}
            />

            {/* Secondary pink circle */}
            <div
              className="
                absolute
                right-[2%] bottom-[-30%]
                h-[90%] w-[65%]
                rounded-full
                bg-[#d66caf]/20
              "
            />
          </div>

          {/* LEFT: MISSION CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative z-20
              w-full
              px-7 pt-12 pb-5
              text-left
              sm:px-10
              md:py-14 md:pl-12 md:pr-0
              lg:pl-16
            "
          >
            {/* Mission label */}
            <div
              className="
                mb-7 flex items-center
                gap-3 text-lg
                font-semibold text-[#77717c]
              "
            >
              <span
                className="
                  h-4 w-4
                  shrink-0 rounded-[4px]
                  bg-pink
                "
              />

              <span>Mission</span>
            </div>

            {/* Heading */}
            <h2
              className="
                mb-7 max-w-[580px]
                font-display
                text-[34px] font-extrabold
                leading-[1.12] tracking-[-0.035em]
                text-[#251c2b]
                sm:text-[42px]
                md:text-[44px]
                lg:text-[56px]
              "
            >
              Audio Bible at
              <br className="hidden lg:block" /> your{" "}
              <span className="text-[#b82b83]">fingertips</span>
            </h2>

            {/* Description */}
            <p
              className="
                max-w-[490px]
                text-base font-normal
                leading-[1.75] text-[#625d68]
                sm:text-lg
                lg:text-[20px]
              "
            >
              In a fast-paced, short-reading, limited-attention-span generation,
              following God&rsquo;s word through a listening mode seamlessly
              aids meditation and encounters with God &mdash; a core, major
              drive behind Quiver.
            </p>
          </motion.div>

          {/* RIGHT: IMAGE COLUMN */}
          <div
            className="
              relative z-10
              flex h-[350px]
              items-end justify-center
              self-end
              md:h-full
              min-w-0
            "
          >
            {/* IMAGE WRAPPER
                Allows overflow at top only.
                Clips right, bottom and left.
            */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                [clip-path:inset(-250px_0_0_0)]
              "
            >
              <motion.img
                src={quiverGirl}
                alt="Teenager wearing headphones, listening to the Quiver audio Bible"
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute z-10
                  bottom-0 right-0
                  h-auto
                  w-[300px]
                  max-w-none
                  object-contain
                  sm:w-[350px]
                  md:bottom-[-80px]
                  md:right-0
                  md:w-[420px]
                  lg:w-[470px]
                  xl:w-[500px]
                "
              />
            </div>
          </div>

          {/* DECORATIVE PINK SOUND LINES */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute z-20
              right-[5%] top-[30%]
              hidden md:block
            "
          >
            <span
              className="
                absolute
                h-[5px] w-8
                rotate-[-55deg]
                rounded-full
                bg-[#c41481]
              "
            />

            <span
              className="
                absolute left-4 top-5
                h-[5px] w-8
                rotate-[-30deg]
                rounded-full
                bg-[#c41481]
              "
            />

            <span
              className="
                absolute left-6 top-11
                h-[5px] w-7
                rotate-[-10deg]
                rounded-full
                bg-[#c41481]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
