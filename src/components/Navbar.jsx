import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/images/favicon.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#mission", label: "Mission" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center ${
          scrolled ? "px-4 sm:px-6" : "px-0"
        }`}
        animate={{ paddingTop: scrolled ? 14 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.nav
          className="flex w-full items-center px-5 sm:px-6 lg:px-8"
          animate={{
            maxWidth: scrolled ? 880 : 1280,
            borderRadius: scrolled ? 999 : 0,
            paddingTop: scrolled ? 10 : 26,
            paddingBottom: scrolled ? 14 : 26,
            backgroundColor: scrolled
              ? "rgba(86, 15, 73, 0.55)"
              : "rgba(86, 15, 73, 0)",
            backdropFilter: scrolled ? "blur(19px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(17, 7, 18, 0.28)"
              : "0 0 0 rgba(0,0,0,0)",
            borderColor: scrolled
              ? "rgba(255, 255, 255, 0.14)"
              : "rgba(255, 255, 255, 0)",
          }}
          style={{ borderWidth: 1, borderStyle: "solid" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <a href="#home" className="flex shrink-0 items-center gap-2">
            <img src={logo} alt="Quiver" className="h-8 w-auto sm:h-9" />
            <span className="text-lg font-bold text-white sm:text-xl">
              Quiver
            </span>
          </a>

          <ul className="hidden flex-1 list-none items-center justify-center gap-9 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  className="group relative inline-block pb-1 font-medium tracking-[0.3px] text-white/82 transition-colors duration-200 ease-in-out hover:text-white"
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-pink transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
                </motion.a>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <a
              href="https://play.google.com/store/apps/details?id=org.rcnsermons.quiver"
              className="inline-flex items-center justify-center rounded-full border-2 border-pink bg-pink px-5 py-2 font-semibold text-white transition-colors duration-300 ease-out hover:border-white/82 hover:bg-transparent hover:text-white/82"
            >
              Download
            </a>
          </div>

          <button
            className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
          >
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-white" />
            </div>
          </button>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[80%] max-w-sm flex-col bg-maroon-dark p-6 shadow-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="Quiver" className="h-7 w-auto" />
                  <span className="text-lg font-bold text-white">Quiver</span>
                </div>
                <button
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xl text-white"
                  onClick={() => setOpen(false)}
                >
                  &times;
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    whileHover={{ x: 4 }}
                    className="text-lg font-medium text-white/80"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center rounded-full border-2 border-pink bg-pink px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 ease-out hover:border-white/82 hover:bg-transparent hover:text-white/82"
              >
                Download
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
