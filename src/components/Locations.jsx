
import { motion } from "framer-motion";
import { UtensilsCrossed, Download } from "lucide-react";

const menuCategories = [
  {
    title: "Chinese Main Course",
    items: [
      "Hakka Noodles",
      "Gravy Noodles",
      "Schezwan Noodles",
      "Fried Rice",
      "Schezwan Fried Rice",
      "Chilli Chicken",
      "Chilli Fish",
      "Chilli Prawn",
      "Manchurian",
      "Sweet & Sour",
      "Garlic Chicken",
    ],
  },
  {
    title: "Special Bengali Thali",
    items: [
      "Veg Thali",
      "Charulata Thali",
      "Byomkesh Thali",
      "Feluda Thali",
      "Aiburo Bhat Thali",
    ],
  },
  {
    title: "Drinks & Beverages",
    items: [
      "Thums Up",
      "Sprite",
      "Fresh Lime Soda",
      "Blue Lagoon",
      "Virgin Mojito",
      "Masala Cold Drinks",
      "Mineral Water",
    ],
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="py-28 bg-gradient-to-b from-white via-orange-50 to-orange-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold">
            <UtensilsCrossed size={18} />
            Our Menu
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900">
            Delicious Food
            <span className="block text-orange-500">
              Crafted With Authentic Flavours
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Discover our signature Bengali dishes, Chinese specialties,
            premium thalis and refreshing beverages prepared with fresh
            ingredients and traditional recipes.
          </p>

          {/* Download Menu Button */}
          <div className="flex justify-center mt-10">
            <a
              href="/menu.pdf"
              download
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-orange-500
                via-red-500
                to-orange-600
                text-white
                font-semibold
                overflow-hidden
                shadow-xl
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_25px_60px_rgba(249,115,22,0.35)]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-white/20
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform
                  duration-1000
                "
              />

              <Download
                size={20}
                className="relative z-10 group-hover:animate-bounce"
              />

              <span className="relative z-10">
                Download Full Menu
              </span>
            </a>
          </div>
        </motion.div>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {menuCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                bg-white
                rounded-[30px]
                p-8
                border
                border-orange-100
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-orange-300
                hover:shadow-[0_25px_60px_rgba(249,115,22,0.18)]
              "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                  text-orange-600
                  mb-6
                  transition-all
                  duration-300
                  group-hover:text-red-500
                "
              >
                {category.title}
              </h3>

              <ul className="space-y-3">

                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="
                      text-slate-700
                      border-b
                      border-slate-100
                      pb-2
                      transition-all
                      duration-300
                      hover:text-orange-500
                      hover:translate-x-2
                      cursor-pointer
                    "
                  >
                    {item}
                  </li>
                ))}

              </ul>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

