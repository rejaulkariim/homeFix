"use client";
import { motion } from "framer-motion";

interface headerTypes {
  heading: string;
  subtitle: string;
}
const Hearder: React.FC<headerTypes> = ({ heading, subtitle }) => {
  return (
    <div className="overflow-hidden flex justify-center mb-4">
      <div className="py-4 text-center space-y-2">
        <motion.h2
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
          className="text-2xl md:text-4xl font-bold uppercase"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
          className="max-w-xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default Hearder;
