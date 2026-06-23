
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock3,
  UtensilsCrossed,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-100"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold">
            Contact Bhojan Kolkata
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-slate-900">
            Visit Our
            <span className="block text-orange-500">
              Restaurant Today
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Enjoy authentic Bengali, Chinese and Indian cuisine
            prepared with fresh ingredients and traditional flavours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div className="bg-white p-8 rounded-[35px] shadow-2xl border border-orange-100">

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-orange-100 flex items-center justify-center">
                <UtensilsCrossed
                  size={28}
                  className="text-orange-500"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Bhojan Spicy Hotel
                </h3>

                <p className="text-orange-500 font-medium">
                  Authentic Bengali Cuisine
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 mb-8">
              <MapPin className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-bold text-xl">
                  Restaurant Address
                </h4>

                <p className="text-slate-600 mt-2">
                  Bidhan Nagar Road,
                  <br />
                  15th Bus Stand,
                  Ultadanga,
                  Kolkata
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 mb-8">
              <Phone className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-bold text-xl">
                  Phone Number
                </h4>

                <a
                  href="tel:+917003766790"
                  className="text-slate-600 hover:text-orange-500"
                >
                  +91 7003766790
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4 mb-8">
              <MessageCircle className="text-green-500 mt-1" />
              <div>
                <h4 className="font-bold text-xl">
                  WhatsApp Orders
                </h4>

                <p className="text-slate-600">
                  Quick ordering and customer support
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 mb-8">
              <Clock3 className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-bold text-xl">
                  Opening Hours
                </h4>

                <p className="text-slate-600">
                  11:00 AM – 11:00 PM
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="tel:+917003766790"
                className="
                  px-8 py-4 rounded-full
                  bg-gradient-to-r
                  from-orange-500
                  to-red-500
                  text-white
                  font-semibold
                  shadow-xl
                  hover:scale-105
                  transition-all
                "
              >
                Call Now
              </a>

              <a
                href="https://wa.me/917003766790"
                target="_blank"
                rel="noreferrer"
                className="
                  px-8 py-4 rounded-full
                  bg-green-500
                  text-white
                  font-semibold
                  shadow-xl
                  hover:scale-105
                  transition-all
                "
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-[35px] shadow-2xl border border-orange-100">
            <iframe
              title="Bhojan Kolkata"
              src="https://maps.google.com/maps?q=Ultadanga%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="650"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

