import { motion } from "framer-motion";
import {
  Phone,
  CalendarDays,
  Star,
  UtensilsCrossed,
  ChefHat,
  Award,
} from "lucide-react";

import heroImg from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FFF8F0] flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bhojan Restaurant"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />

      {/* Luxury Glows */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-orange-300/30 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/30 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-lg border border-orange-100">
            <ChefHat size={18} className="text-orange-500" />
            <span className="text-sm font-semibold text-slate-700">
              Authentic Bengali Cuisine
            </span>
          </div>

       <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-xl border border-orange-100">
  <ChefHat size={18} className="text-orange-500" />
  <span className="text-sm font-bold tracking-wider text-slate-700 uppercase">
    Since 2010 • Kolkata's Favourite Bengali Kitchen
  </span>
</div>
         {/* Heading */}
<h1 className="mt-8 leading-[0.9]">


  <span className="block text-6xl md:text-7xl xl:text-[95px] font-black text-slate-900">
    BHOJAN
  </span>

  <span className="block text-6xl md:text-7xl xl:text-[95px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
    KOLKATA
  </span>

</h1>

<p className="mt-8 text-xl text-slate-600 max-w-2xl leading-9">
  Experience the true essence of Bengali cuisine with handcrafted
  delicacies, traditional recipes, premium catering, and unforgettable
  dining experiences prepared with passion and heritage.
</p>

          {/* Description */}
          <p className="mt-8 text-lg text-slate-600 max-w-2xl leading-8">
            Experience handcrafted Bengali delicacies, premium catering,
            traditional recipes and unforgettable dining moments crafted
            with passion, heritage, and authentic flavors.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mt-8">

            {[
              "Premium Catering",
              "Traditional Bengali Food",
              "Wedding Events",
              "Corporate Catering",
              "Fresh Ingredients",
            ].map((item, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-white shadow-lg border border-orange-100 text-slate-700 font-medium"
              >
                {item}
              </div>
            ))}

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="tel:+919999999999"
              className="
                px-8 py-4 rounded-full
                bg-gradient-to-r
                from-orange-500
                to-red-500
                text-white
                font-semibold
                flex items-center gap-3
                shadow-xl
                hover:scale-105
                transition-all
              "
            >
              <Phone size={18} />
              Book Table
            </a>

            <a
              href="#menu"
              className="
                px-8 py-4 rounded-full
                bg-white
                border
                border-orange-200
                shadow-lg
                text-slate-700
                font-semibold
                flex items-center gap-3
                hover:border-orange-500
                hover:text-orange-500
                transition-all
              "
            >
              <UtensilsCrossed size={18} />
              View Menu
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>
              <h3 className="text-4xl font-bold text-orange-500">
                10K+
              </h3>
              <p className="text-slate-600">
                Happy Guests
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">
                50+
              </h3>
              <p className="text-slate-600">
                Signature Dishes
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">
                4.9★
              </h3>
              <p className="text-slate-600">
                Customer Rating
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
     {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 70 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative hidden lg:flex justify-center items-center"
>

  {/* Glow */}
  <div className="absolute w-[650px] h-[650px] bg-gradient-to-r from-orange-300/30 to-yellow-300/30 rounded-full blur-[120px]" />

  {/* Main Image */}
  <motion.img
    animate={{
      y: [0, -20, 0],
      rotate: [0, 1, 0, -1, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    src={heroImg}
    alt="Restaurant"
    className="
      relative z-10
      w-[580px]
      h-[720px]
      object-cover
      object-center
      rounded-[50px]
      border-[12px]
      border-white
      ring-1
      ring-white/50
      shadow-[0_50px_120px_rgba(0,0,0,0.18)]
      hover:scale-[1.02]
      transition-all
      duration-700
    "
  />

  {/* Premium Quality Card */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      top-12
      -left-12
      z-20
      bg-white/90
      backdrop-blur-xl
      p-6
      rounded-3xl
      shadow-2xl
      border
      border-orange-100
    "
  >
    <div className="flex items-center gap-3">
      {/* <Award className="text-orange-500" size={26} /> */}
      {/* <div>
        <h3 className="font-bold text-slate-900">
          Premium Quality
        </h3>
        <p className="text-sm text-slate-500">
          Finest Ingredients
        </p>
      </div> */}
    </div>
  </motion.div>

  {/* Catering Card */}
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      bottom-10
      -right-12
      z-20
      bg-white/90
      backdrop-blur-xl
      p-6
      rounded-3xl
      shadow-2xl
      border
      border-orange-100
    "
  >
    <div className="flex items-center gap-3">
      <CalendarDays className="text-red-500" size={26} />
      <div>
        <h3 className="font-bold text-slate-900">
          Event Catering
        </h3>
        <p className="text-sm text-slate-500">
          Weddings & Corporate
        </p>
      </div>
    </div>
  </motion.div>

  {/* Rating Card */}
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
    className="
      absolute
      bottom-48
      -left-6
      z-20
      bg-white
      px-6
      py-4
      rounded-3xl
      shadow-2xl
      flex
      items-center
      gap-4
      border
      border-orange-100
    "
  >
    <Star
      className="text-yellow-500 fill-yellow-500"
      size={24}
    />
    <div>
      <h4 className="font-bold text-slate-900">
        4.9/5 Rating
      </h4>
      <p className="text-xs text-slate-500">
        Thousands of Happy Guests
      </p>
    </div>
  </motion.div>

</motion.div>

      </div>
    </section>
  );
}