import { motion } from "framer-motion";
import {
ChefHat,
UtensilsCrossed,
Star,
Award,
CheckCircle,
} from "lucide-react";

const About = () => {
return ( <section
   id="about"
   className="py-28 bg-gradient-to-b from-[#FFF8F0] to-white overflow-hidden"
 > <div className="max-w-7xl mx-auto px-6">



    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >

        <div className="overflow-hidden rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,.12)]">

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200"
            alt="Bhojan Kolkata"
            className="w-full h-[700px] object-cover hover:scale-105 transition duration-700"
          />

        </div>

        {/* Floating Card */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            -bottom-8
            left-8
            bg-white
            px-8
            py-5
            rounded-3xl
            shadow-2xl
            border
            border-orange-100
          "
        >
          <h3 className="text-4xl font-black text-orange-500">
            15+
          </h3>

          <p className="text-slate-500">
            Years of Culinary Excellence
          </p>
        </motion.div>

      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <span className="px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold">
          About Bhojan Kolkata
        </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-slate-900">

          Bringing The

          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
            Authentic Taste Of Bengal
          </span>

        </h2>

        <p className="mt-6 text-lg text-slate-600 leading-8">
          Bhojan Kolkata is a destination for authentic Bengali
          cuisine, where traditional recipes meet premium
          hospitality. Every dish is crafted using fresh
          ingredients and age-old cooking techniques that celebrate
          Bengal's rich culinary heritage.
        </p>

        <p className="mt-5 text-lg text-slate-600 leading-8">
          Whether it's family dining, weddings, festivals, birthday
          celebrations or corporate events, we create memorable food
          experiences filled with flavour, tradition and warmth.
        </p>

        {/* Features */}
        <div className="mt-10 space-y-4">

          <div className="flex items-center gap-3">
            <CheckCircle
              className="text-orange-500"
              size={20}
            />
            <span className="font-medium text-slate-700">
              Authentic Bengali Recipes
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle
              className="text-orange-500"
              size={20}
            />
            <span className="font-medium text-slate-700">
              Premium Catering Services
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle
              className="text-orange-500"
              size={20}
            />
            <span className="font-medium text-slate-700">
              Fresh & Quality Ingredients
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle
              className="text-orange-500"
              size={20}
            />
            <span className="font-medium text-slate-700">
              Wedding & Corporate Events
            </span>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-5 mt-12">

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-orange-50 rounded-3xl p-6"
          >
            <UtensilsCrossed
              className="text-orange-500 mb-3"
              size={32}
            />

            <h3 className="text-3xl font-black text-slate-900">
              100+
            </h3>

            <p className="text-slate-600">
              Signature Dishes
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-amber-50 rounded-3xl p-6"
          >
            <ChefHat
              className="text-amber-500 mb-3"
              size={32}
            />

            <h3 className="text-3xl font-black text-slate-900">
              15+
            </h3>

            <p className="text-slate-600">
              Years Experience
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-orange-50 rounded-3xl p-6"
          >
            <Award
              className="text-orange-500 mb-3"
              size={32}
            />

            <h3 className="text-3xl font-black text-slate-900">
              5000+
            </h3>

            <p className="text-slate-600">
              Happy Guests
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-amber-50 rounded-3xl p-6"
          >
            <Star
              className="text-amber-500 mb-3"
              size={32}
            />

            <h3 className="text-3xl font-black text-slate-900">
              4.9★
            </h3>

            <p className="text-slate-600">
              Customer Rating
            </p>
          </motion.div>

        </div>

      </motion.div>

    </div>

  </div>
</section>


);
};

export default About;
