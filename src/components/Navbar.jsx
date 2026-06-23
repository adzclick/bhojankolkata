import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  UtensilsCrossed,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Menu", link: "#menu" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="
          max-w-7xl
          mx-auto
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/20
          rounded-full
          shadow-[0_10px_50px_rgba(0,0,0,.15)]
          px-6
          h-20
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <motion.div
            whileHover={{
              rotate: 360,
              scale: 1.1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              w-12
              h-12
              rounded-2xl
              bg-gradient-to-r
              from-orange-500
              via-amber-500
              to-yellow-500
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <UtensilsCrossed
              className="text-white"
              size={22}
            />
          </motion.div>

          <div>
            <h2 className="font-bold text-gray-900 text-lg leading-none">
              BHOJAN KOLKAT
            </h2>

            <p className="text-xs text-orange-600 font-medium mt-1">
              Fine Dining Restaurant
            </p>
          </div>

        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10">

          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="
                relative
                text-gray-800
                font-medium
                group
              "
            >
              {item.name}

              <span
                className="
                  absolute
                  left-0
                  -bottom-2
                  w-0
                  h-[2px]
                  bg-orange-500
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}

        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* BOOK TABLE */}
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="tel:+919999999999"
            className="
              hidden
              md:flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-red-500
              text-white
              font-semibold
              shadow-lg
            "
          >
            <Phone size={18} />
            Book Table
          </motion.a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="
              lg:hidden
              w-11
              h-11
              rounded-full
              bg-white/30
              backdrop-blur-xl
              flex
              items-center
              justify-center
            "
          >
            {mobileMenu ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {mobileMenu && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              lg:hidden
              mt-4
              max-w-7xl
              mx-auto
              rounded-3xl
              overflow-hidden
              bg-white/95
              backdrop-blur-xl
              shadow-2xl
            "
          >

            {menuItems.map((item) => (

              <a
                key={item.name}
                href={item.link}
                onClick={() =>
                  setMobileMenu(false)
                }
                className="
                  block
                  px-6
                  py-4
                  border-b
                  border-gray-100
                  hover:bg-orange-50
                  font-medium
                "
              >
                {item.name}
              </a>

            ))}

            <div className="p-4">

              <a
                href="tel:+919999999999"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-orange-500
                  to-red-500
                  text-white
                  font-semibold
                "
              >
                <Phone size={18} />
                Book Table
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}