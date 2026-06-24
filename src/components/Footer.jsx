import { motion } from "framer-motion";
import {
UtensilsCrossed,
Phone,
MapPin,
Clock3,
ArrowUpRight,
Download,
Star,
} from "lucide-react";

const Footer = () => {
return ( <footer className="relative overflow-hidden bg-slate-950 text-white">

  {/* Background Effects */}
  <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-500/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6 py-20">

    {/* Top Section */}
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

      {/* Brand */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-xl">
            <UtensilsCrossed size={28} />
          </div>

          <div>
            <h3 className="text-3xl font-black">
              BHOJAN
            </h3>

            <p className="text-orange-400 font-medium">
              Kolkata
            </p>
          </div>

        </div>

        <p className="text-slate-400 leading-8">
          Authentic Bengali cuisine, premium catering,
          wedding feasts and unforgettable dining
          experiences crafted with tradition and passion.
        </p>

        <div className="flex items-center gap-2 mt-5 text-orange-400">
          <Star
            size={18}
            className="fill-orange-400"
          />
          <span>4.9 Rated Restaurant</span>
        </div>

      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-bold mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4">

          {[
            "Home",
            "About",
            "Menu",
            "Gallery",
            "Contact",
          ].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="group flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-all duration-300"
              >
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1"
                />
                {item}
              </a>
            </li>
          ))}

        </ul>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl font-bold mb-6">
          Contact Info
        </h3>

        <div className="space-y-5">

          <div className="flex items-start gap-3">
            <MapPin
              size={20}
              className="text-orange-400 mt-1"
            />
            <p className="text-slate-400">
              Bhojan Kolkata
              <br />
             15 Number Ultadanga Bus Stand,Murari Pukur, Kolkata-700067, West Bengal
            </p>
          </div>

          <a
            href="tel:+917003766790"
            className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition"
          >
            <Phone size={20} />
            +917003766790
          </a>

          <div className="flex items-center gap-3 text-slate-400">
            <Clock3 size={20} />
            12:00 PM – 11:00 PM
          </div>

        </div>

      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl font-bold mb-6">
          Explore
        </h3>

        <div className="space-y-4">

          <a
            href="#menu"
            className="
              flex items-center justify-center gap-3
              w-full
              py-4
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-red-500
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-xl
            "
          >
            <UtensilsCrossed size={18} />
            View Menu
          </a>

          <a
            href="/menu.pdf"
            download
            className="
              flex items-center justify-center gap-3
              w-full
              py-4
              rounded-full
              border
              border-orange-500
              text-orange-400
              hover:bg-orange-500
              hover:text-white
              transition-all
              duration-300
            "
          >
            <Download size={18} />
            Download Menu
          </a>

        </div>

      </motion.div>

    </div>

    {/* Bottom */}
    <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-slate-500 text-sm text-center">
        © 2026 Bhojan Kolkata. All Rights Reserved.
      </p>

      <motion.p
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="text-orange-400 text-sm"
      >
        Authentic Bengali Cuisine • Premium Catering • Fine Dining
      </motion.p>

    </div>

  </div>

</footer>


);
};

export default Footer;
