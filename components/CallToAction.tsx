"use client";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      whileInView={{ y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1.35,
      }}
      className="bg-gradient-to-r from-secondary to-primary text-white py-16 px-8 text-center rounded-xl"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Ready to Discuss Your Project?
      </h2>
      <p className="text-lg mb-6">Our team is here to help. Call us now!</p>
      <a
        href="tel:+1234567890"
        className="text-3xl font-extrabold hover:underline"
      >
        +123 456 7890
      </a>
    </motion.div>
  );
};

export default CallToAction;
