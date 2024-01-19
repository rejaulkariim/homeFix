"use client";
import { testimonails } from "@/constants";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import Hearder from "./Hearder";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const Testimonails = () => {
  return (
    <section className="section-padding">
      <Hearder
        heading="What Our Clients Say"
        subtitle="Discover the Stories of Satisfied Customers"
      />

      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonails.map((testimonial, index) => (
            <motion.div
              key={index}
              // initial={{ y: "-100%" }}
              // whileInView={{ y: 0 }}
              // transition={{
              //   ease: "easeInOut",
              //   duration: 1.35,
              //   delay: index / 3,
              // }}
              className="shadow-md p-4 rounded-lg border-2 border-muted bg-card"
            >
              <p className="p-regular">{testimonial.review}</p>
              <div className="flex text-amber-500 mt-2">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="p-regular">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonails;
