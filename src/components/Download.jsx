import { motion } from "framer-motion";

export default function Download() {
  return (
    <>
      {/* DOWNLOAD SECTION */}
      <section
        id="download"
        className="bg-white px-6 pt-24 pb-28 text-center md:pt-28 md:pb-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Download label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-2.5"
          >
            <span className="h-3.5 w-3.5 rounded-sm bg-pink" />

            <span className="font-semibold text-muted">Download</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              mx-auto mb-12 max-w-150
              font-display text-[#241b2a]
              font-bold leading-[1.35]
              text-[30px] sm:text-[36px]
              md:text-[40px]
            "
          >
            Get Quiver on your phone
            <br className="hidden sm:block" />
            today
          </motion.h2>

          {/* Download buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              flex flex-col items-center
              justify-center gap-4
              sm:flex-row
            "
          >
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=org.rcnsermons.quiver"
              aria-label="Get Quiver on Google Play"
              className="
                flex h-14 w-45
                items-center justify-center gap-3
                rounded-[14px]
                bg-purple-panel px-5
                text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-purple-panel-deep
                hover:shadow-lg
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#902476]
              "
            >
              {/* Google Play icon */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 shrink-0"
                aria-hidden="true"
              >
                <path d="M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5L13 12 3.6 2.3Zm10.4 10.6-2.5 2.6 3.2 3.2 4-2.3c1.1-.6 1.1-1.6 0-2.2L14 12.9Zm-2.5-4.4L14 11.1l4.7-2.7-4-2.3-3.2 3.2ZM4.7 1.8l9 9.3 3.2-3.2-10-5.8c-.9-.5-1.6-.6-2.2-.3Zm0 20.4c.6.3 1.3.2 2.2-.3l10-5.8-3.2-3.2-9 9.3Z" />
              </svg>

              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-normal">GET IT ON</span>
                <span className="whitespace-nowrap text-[17px] font-bold">
                  Google Play
                </span>
              </span>
            </a>

            {/* App Store */}
            <a
              href="https://apps.apple.com/ng/app/quiver-rcn-teenagers/id6799968399"
              aria-label="Download Quiver on the App Store"
              className="
                flex h-14 w-45
                items-center justify-center gap-3
                rounded-[14px]
                bg-purple-panel px-5
                text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-purple-panel-deep
                hover:shadow-lg
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#902476]
              "
            >
              {/* Apple icon */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 shrink-0"
                aria-hidden="true"
              >
                <path d="M17.05 12.54c.03 3.14 2.75 4.18 2.78 4.19-.02.07-.43 1.49-1.44 2.96-.87 1.27-1.77 2.53-3.19 2.56-1.4.03-1.85-.83-3.45-.83-1.59 0-2.09.8-3.42.86-1.38.05-2.43-1.38-3.31-2.64-1.8-2.6-3.18-7.35-1.33-10.55a5.13 5.13 0 0 1 4.3-2.63c1.34-.03 2.6.91 3.42.91.81 0 2.34-1.13 3.95-.96.67.03 2.55.27 3.76 2.04-.1.06-2.24 1.3-2.22 4.09ZM14.4 4.72A5.05 5.05 0 0 0 15.56 1c-1.1.04-2.44.74-3.23 1.67a4.8 4.8 0 0 0-1.19 3.6c1.23.1 2.48-.63 3.26-1.55Z" />
              </svg>

              <span className="flex flex-col items-start leading-tight">
                <span className="whitespace-nowrap text-[10px] font-normal">
                  Download on the
                </span>
                <span className="whitespace-nowrap text-[17px] font-bold">
                  App Store
                </span>
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
