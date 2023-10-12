"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <Link
        href="tel:+60179928203"
        className="text-3xl font-extrabold hover:underline tracking-wider"
      >
        +6017-9928-203
      </Link>
    </motion.div>
  );
};

export default CallToAction;
