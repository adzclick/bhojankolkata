import { motion } from "framer-motion";
import { Camera, ImageIcon } from "lucide-react";

import gallery1 from "../assets/pic1.jpeg";
import gallery2 from "../assets/pic2.jpeg";
import gallery3 from "../assets/pic3.jpeg";
import gallery4 from "../assets/pic4.jpeg";
import gallery5 from "../assets/pic5.jpeg";
import gallery6 from "../assets/pic6.jpeg";
import gallery7 from "../assets/pic7.jpeg";
import gallery8 from "../assets/pic8.jpeg";
import gallery9 from "../assets/pic9.jpeg";
import gallery10 from "../assets/pic10.jpeg";
import gallery11 from "../assets/pic11.jpeg";
import gallery12 from "../assets/pic12.jpeg";
import gallery13 from "../assets/pic13.jpeg";
import gallery14 from "../assets/pic14.jpeg";
import gallery15 from "../assets/pic15.jpeg";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 bg-gradient-to-b from-orange-50 via-white to-orange-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold">
            <Camera size={18} />
            Our Gallery
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900">
            Moments From
            <span className="block text-orange-500">
              Bhojan Kolkata
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Explore our authentic Bengali dishes, catering events,
            restaurant ambience and memorable dining experiences.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[30px] shadow-xl bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="
                    w-full
                    h-[280px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  flex
                  items-end
                  justify-center
                  pb-6
                "
              >
                <div className="text-center text-white">
                  <ImageIcon
                    size={28}
                    className="mx-auto mb-2"
                  />
                  <p className="font-semibold">
                    Bhojan Kolkata
                  </p>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}