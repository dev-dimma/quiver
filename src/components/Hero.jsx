import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import phoneScreen from "../assets/images/mobile-app.png";
import quiverWordmark from "../assets/images/bg-image.webp";

const EASE = [0.16, 1, 0.3, 1];
const BG_DURATION = 900;
const PHONE_DURATION = 800;

export default function Hero() {
  const [showPhone, setShowPhone] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowPhone(true), BG_DURATION);
    const t2 = setTimeout(
      () => setShowContent(true),
      BG_DURATION + PHONE_DURATION,
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative pt-38 text-center overflow-hidden bg-linear-to-b from-maroon-dark via-maroon-mid to-[#fbf5fa]"
      style={{
        backgroundImage:
          "linear-gradient(180deg,var(--color-maroon-dark) 0%,var(--color-maroon-mid) 38%,#C9A9C4 78%,#fbf5fa 100%)",
      }}
    >
      <div aria-hidden className="absolute top-[17%] inset-x-0 z-0">
        <div className="max-w-7xl mx-auto px-6">
          <motion.img
            src={quiverWordmark}
            alt=""
            initial={{ y: "-160%" }}
            animate={{ y: 0 }}
            transition={{ duration: BG_DURATION / 1000, ease: EASE }}
            className="mx-auto h-auto w-full opacity-15 select-none pointer-events-none"
          />
        </div>
      </div>

      <div className="relative z-2 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="inline-flex items-center gap-2 text-white/75 text-[13px] font-medium tracking-wide mb-4.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" />
          Remnant Christian Network &middot; Teens &amp; Children&rsquo;s
          Ministry
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={showContent ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display text-white font-bold leading-tight max-w-3xl mx-auto mb-4.5"
          style={{ fontSize: "clamp(32px,5vw,54px)" }}
        >
          Scripture, made for the way teenagers actually listen.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 80 }}
          animate={showContent ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-white/80 text-[17px] max-w-lg mx-auto mb-8.5 leading-relaxed"
        >
          An audio Bible, live quiz clubs, and a feed for sharing devotions
          &mdash; built to bring teenagers closer to God&rsquo;s word, one
          chapter at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="
    mb-14 flex flex-col items-center
    justify-center gap-4
    sm:flex-row
  "
        >
          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=org.rcnsermons.quiver"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Quiver on Google Play"
            className="
      flex h-14 w-45
      items-center justify-center gap-3
      rounded-[14px]
      bg-purple-panel-deep px-5
      text-white
      transition-all duration-300
      hover:-translate-y-1
      hover:bg-purple-panel
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
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Quiver on the App Store"
            className="
      flex h-14 w-45
      items-center justify-center gap-3
      rounded-[14px]
      bg-purple-panel-deep px-5
      text-white
      transition-all duration-300
      hover:-translate-y-1
      hover:bg-purple-panel
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

        <motion.div
          initial={{ opacity: 0, y: 220 }}
          animate={showPhone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: PHONE_DURATION / 1000, ease: EASE }}
          className="relative z-2 max-w-85 mx-auto"
        >
          <img
            src={phoneScreen}
            alt="Quiver app audio Bible screen showing the Book of John"
            className="w-full rounded-[28px]"
            style={{ filter: "drop-shadow(0 20px 35px rgba(0,0,0,.3))" }}
          />
        </motion.div>
      </div>

      <div
        className="h-28 relative z-3 -mt-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, #ffffff 55%, #ffffff 100%)",
        }}
      />
    </section>
  );
}
