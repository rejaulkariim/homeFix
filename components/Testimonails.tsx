"use client";
import { testimonails } from "@/constants";
import { motion } from "framer-motion";
import Hearder from "./Hearder";

const Testimonails = () => {
  return (
    <section className="wrapper py-8">
      <Hearder
        heading="What Our Clients Say"
        subtitle="Discover the Stories of Satisfied Customers"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonails.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1.35,
              delay: index / 3,
            }}
            className="shadow-md p-4 rounded-lg border-2 border-muted bg-card"
          >
            <p className="text-foreground">{testimonial.review}</p>
            <p className="mt-4 text-foreground">{testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonails;
