"use client";

import { services } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Hearder from "./Hearder";
import { Button } from "./ui/Button";
const Services = () => {
  return (
    <section className="wrapper">
      <Hearder
        heading="Expert Services"
        subtitle="Discover a World of Home Improvement, Electronics Care, Climate Control, Kitchen Design, and More."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1.35,
              delay: index / 5,
            }}
            className="border-2 shadow-sm hover:border-primary rounded-xl overflow-hidden"
          >
            <Image
              src={item.src}
              alt={item.alt}
              height={300}
              width={500}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-foreground font-semibold mb-2">
                {item.heading}
              </h3>
              <p className="text-foreground mb-4">
                {item.description.substring(0, 90)}...
              </p>
              <Button asChild>
                <Link href={item.link} className="">
                  {item.cta}
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
