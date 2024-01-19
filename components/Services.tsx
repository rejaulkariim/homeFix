"use client";

import { heros } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Hearder from "./Hearder";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const Services = () => {
  return (
    <section className="section-padding">
      <Hearder
        heading="Expert Services"
        subtitle="Discover a World of Home Improvement, Electronics Care, Climate Control, Kitchen Design, and More."
      />

      <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {heros.map((item, index) => (
            <motion.div
              key={item.id}
              // initial={{ y: "-100%" }}
              // whileInView={{ y: 0 }}
              // transition={{
              //   ease: "easeInOut",
              //   duration: 1.35,
              //   delay: index / 5,
              // }}
              className="border-2 shadow-sm hover:border-primary rounded-xl overflow-hidden bg-card cursor-pointer"
            >
              <Link href={`services/${item.link}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  height={500}
                  width={500}
                  className="object-cover h-60 w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg text-foreground font-bold mb-2 uppercase">
                    {item.heading}
                  </h3>
                  <p className="p-regular mb-4">{item.paragraph}</p>
                  {/* <Button asChild size="lg">
                  <Link href={`services/${item.link}`} className="uppercase">
                    {item.cta}
                  </Link>
                </Button> */}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
