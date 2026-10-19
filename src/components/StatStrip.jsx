import { motion } from "framer-motion";

const stats = [
  { value: "0", label: "Screen Time" },
  { value: "100%", label: "Word Time" },
  { value: "GOD", label: "Focused" },
];

export default function StatStrip() {
  return (
    <section
      aria-label="Quiver statistics"
      className="
        relative z-10
        bg-white
        px-5
        pt-3 pb-8
        sm:px-0
        sm:pt-0
        sm:pb-7.5
      "
    >
      <div
        className="
          mx-auto
          grid max-w-7xl
          grid-cols-2
          items-end
          justify-items-center
          gap-x-4 gap-y-5
          text-center

          sm:flex
          sm:items-end
          sm:justify-center
          sm:flex-wrap
          sm:gap-[min(13vw,120px)]
        "
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
            }}
            className={`
              flex flex-col
              items-center
              justify-end

              ${s.value === "100%" ? "col-span-2 row-start-1" : "row-start-2"}

              sm:block
            `}
          >
            <b
              className="
                block
                font-display
                font-extrabold
                leading-none
                text-[#e4dbe3]
                sm:leading-normal
              "
              style={{
                fontSize:
                  s.value === "100%"
                    ? "clamp(58px,10vw,108px)"
                    : "clamp(30px,4.2vw,50px)",
              }}
            >
              {s.value}
            </b>

            <span
              className="
                mt-1
                block
                whitespace-nowrap
                text-[clamp(16px,4vw,22px)]
                font-semibold
                text-[#c8bdc6]

                sm:mt-0
                sm:text-3xl
              "
            >
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
