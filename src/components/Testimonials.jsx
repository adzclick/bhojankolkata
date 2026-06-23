import { motion } from "framer-motion";
import { Quote, Star, ExternalLink } from "lucide-react";

const Testimonials = () => {
  // const reviewUrl =
  //   "https://g.page/r/CXXXXXXXXXXXXXXXX/review"; // Replace with your Google Review link

  const testimonials = [
    {
      name: "Arijit Sen",
      review:
        "Authentic Bengali food with amazing taste and excellent service. The ambience is warm and perfect for family dining.",
    },
    {
      name: "Priya Mukherjee",
      review:
        "One of the best Bengali restaurants in Kolkata. Every dish was fresh, flavorful and beautifully presented.",
    },
    {
      name: "Soumen Das",
      review:
        "Excellent catering service for our family function. Guests loved the food and the professional arrangements.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="px-5 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold">
            Customer Reviews
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-slate-900">
            What Our Guests Say
            <span className="block text-orange-500">
              About Bhojan Kolkata
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Hundreds of guests have enjoyed our authentic Bengali cuisine,
            premium catering services and unforgettable dining experiences.
          </p>
        </motion.div>

        {/* Review Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 120,
                x: index === 0 ? -100 : index === 2 ? 100 : 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className={`relative overflow-hidden rounded-[32px] p-8 shadow-xl transition-all duration-500 ${
                index === 1
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "bg-white border border-orange-100"
              }`}
            >
              <Quote
                size={80}
                className={`absolute top-4 right-4 ${
                  index === 1
                    ? "text-white/20"
                    : "text-orange-100"
                }`}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="currentColor"
                    size={18}
                  />
                ))}
              </div>

              <p
                className={`leading-relaxed text-lg ${
                  index === 1
                    ? "text-white"
                    : "text-slate-600"
                }`}
              >
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-xl">
                  {item.name}
                </h4>

                <p
                  className={
                    index === 1
                      ? "text-orange-100"
                      : "text-slate-500"
                  }
                >
                  Verified Guest
                </p>
              </div>

            </motion.div>
          ))}

        </div>
{/* 
        Google Reviews Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              bg-gradient-to-r
              from-orange-500
              to-red-500
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              shadow-xl
              hover:shadow-orange-500/30
              transition-all
              duration-300
            "
          >
            <Star
              size={20}
              fill="currentColor"
            />
            View Google Reviews
            <ExternalLink size={18} />
          </motion.a>
        </motion.div> */}

      </div>
    </section>
  );
};

export default Testimonials;