import { motion } from "framer-motion";
import logo from "../assets/images/favicon.png";
import layer5 from "../assets/images/layer 4.png";

const EASE = [0.16, 1, 0.3, 1];

// Reusable decorative pink strokes
function AccentLines({ side = "left", className = "" }) {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute z-20
        ${className}
      `}
    >
      <svg
        viewBox="0 0 55 75"
        fill="none"
        className={`
          h-10 w-8
          sm:h-14 sm:w-11
          lg:h-[75px] lg:w-[55px]
          ${!isLeft ? "scale-x-[-1]" : ""}
        `}
      >
        <path
          d="M8 12L40 28"
          stroke="#FF1493"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M8 37H40"
          stroke="#FF1493"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M8 62L40 46"
          stroke="#FF1493"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-white
        pt-12 pb-20
        sm:pt-16 sm:pb-24
        lg:pt-20 lg:pb-32
      "
    >
      {/* SECTION BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-[500px]
        "
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(230,190,220,0.13), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="
            relative mx-auto
            mb-10 text-center
            sm:mb-14
            lg:mb-20
          "
        >
          <p
            className="
              mb-4
              font-display font-bold
              text-[#D60086]
              text-lg
              sm:text-2xl
              lg:text-3xl
            "
          >
            Remnant Christian Network
          </p>

          {/* HEADING WITH DESKTOP ACCENTS */}
          <div
            className="
              relative mx-auto
              w-full max-w-[1100px]
              lg:px-20
            "
          >
            <AccentLines
              side="left"
              className="
                left-0 top-1/2
                hidden -translate-y-1/2
                lg:block
              "
            />

            <h2
              className="
    mx-auto
    font-display font-extrabold
    tracking-[-0.045em]
    leading-[1.08]
    text-[#e4dbe3]
    text-[34px]
    min-[375px]:text-[38px]
    sm:text-[52px]
    md:text-[65px]
    lg:text-[76px]
    xl:text-[86px]
  "
            >
              Teens &amp; Children&rsquo;s
              <br className="hidden sm:block" /> Ministry
            </h2>

            <AccentLines
              side="right"
              className="
                right-0 top-1/2
                hidden -translate-y-1/2
                lg:block
              "
            />
          </div>
        </motion.div>

        {/* MAIN PURPLE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: EASE,
          }}
          className="
            relative isolate
            grid grid-cols-1
            items-center
            overflow-hidden
            rounded-[26px]
            text-white
            shadow-[0_25px_60px_rgba(80,20,65,0.15)]
            sm:rounded-[32px]
            lg:grid-cols-[1.05fr_0.95fr]
            lg:min-h-[500px]
            lg:overflow-visible
            lg:rounded-[36px]
            xl:min-h-[540px]
          "
        >
          {/* PURPLE BACKGROUND */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              overflow-hidden
              rounded-[26px]
              sm:rounded-[32px]
              lg:rounded-[36px]
            "
            style={{
              background:
                "linear-gradient(120deg, #A82B85 0%, #86216D 45%, #65194F 100%)",
            }}
          >
            <div
              className="
                absolute
                -left-[35%] -top-[35%]
                h-[450px] w-[450px]
                rounded-full
                bg-[#F45AB8]/15
                sm:-left-[20%]
                lg:-left-[15%]
                lg:-top-[55%]
                lg:h-[600px]
                lg:w-[600px]
              "
            />

            <div
              className="
                absolute
                -bottom-40 -right-32
                h-[400px] w-[400px]
                rounded-full
                bg-[#F34AAF]/20
                blur-3xl
              "
            />

            <div
              className="
                absolute
                bottom-[-40%] left-[15%]
                h-[350px] w-[350px]
                rounded-full
                bg-pink/15
                blur-[90px]
              "
            />
          </div>

          {/* LEFT: PHONE IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: EASE,
            }}
            className="
              relative z-10
              flex w-full
              min-w-0
              items-center
              justify-center
              px-5 pt-10
              sm:px-8 sm:pt-12
              lg:h-full
              lg:px-0 lg:pt-0
            "
          >
            {/* IMAGE GLOW */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2 top-1/2
                h-[65%] w-[75%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#F65BBB]/20
                blur-[55px]
              "
            />

            {/* LEFT MOBILE/TABLET ACCENT */}
            <AccentLines
              side="left"
              className="
                left-3 top-1/2
                -translate-y-1/2
                sm:left-[10%]
                md:left-[15%]
                lg:hidden
              "
            />

            {/* SINGLE PHONE IMAGE */}
            <img
              src={layer5}
              alt="Quiver app screens showing Bible clubs, audio Bible, and devotion features"
              className="
                relative z-10
                block h-auto
                w-full
                max-w-[260px]
                object-contain
                drop-shadow-[0_25px_30px_rgba(30,0,25,0.3)]
                min-[375px]:max-w-[300px]
                sm:max-w-[400px]
                md:max-w-[480px]
                lg:absolute
                lg:bottom-0
                lg:left-1/2
                lg:w-[105%]
                lg:max-w-none
                lg:-translate-x-1/2
                xl:w-[115%]
              "
            />

            {/* RIGHT MOBILE/TABLET ACCENT */}
            <AccentLines
              side="right"
              className="
                right-3 top-1/2
                -translate-y-1/2
                sm:right-[10%]
                md:right-[15%]
                lg:hidden
              "
            />

            {/* DESKTOP IMAGE ACCENT */}
            <AccentLines
              side="right"
              className="
                right-[8%] top-[15%]
                hidden
                lg:block
              "
            />
          </motion.div>

          {/* RIGHT: ABOUT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: EASE,
            }}
            className="
              relative z-20
              flex w-full min-w-0
              flex-col
              items-start
              justify-center
              px-7 pt-7 pb-12
              text-left
              sm:px-12 sm:pt-9 sm:pb-14
              md:px-16
              lg:px-8 lg:py-16
              xl:pl-12 xl:pr-16
            "
          >
            {/* ABOUT LABEL */}
            <div
              className="
                mb-5
                flex items-center
                gap-3
                sm:mb-7
              "
            >
              <span
                className="
                  h-3.5 w-3.5
                  shrink-0
                  rounded-[4px]
                  bg-[#FF1493]
                  shadow-[0_0_15px_rgba(255,20,147,0.35)]
                "
              />

              <span
                className="
                  text-base
                  font-semibold
                  text-white/90
                  sm:text-lg
                  lg:text-xl
                "
              >
                About
              </span>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                max-w-[520px]
                text-sm
                font-normal
                leading-[1.8]
                text-white/95
                sm:text-base
                md:text-lg
                lg:text-[18px]
                xl:text-[20px]
              "
            >
              The Quiver app allows teenagers in Christ to express themselves,
              share their contemplations, devotions and other scriptural
              insights borne out of their personal meditation and experiences
              with others in ways that foster fellowship digitally.
            </p>

            {/* DECORATIVE UNDERLINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 85 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="
                mt-7 h-1
                rounded-full
                bg-[#FF1493]
                sm:mt-9
              "
            />
          </motion.div>

          {/* SMALL BRAND LOGO */}
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-7 left-8
              z-20
              hidden h-10 w-auto
              brightness-0 invert
              opacity-30
              xl:block
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
