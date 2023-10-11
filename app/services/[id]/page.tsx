"use client";
import { heros } from "@/constants";
import { serviceType } from "@/types/services";
import { motion } from "framer-motion";

const ServiceDetailsPage = ({ params }: { params: { id: string } }) => {
  const service = heros.find((item: serviceType) => item.link === params.id);

  return (
    service && (
      <main className="mt-16">
        {/* BG */}
        <div
          className="h-[60vh] bg-no-repeat bg-center bg-cover bg-fixed flex justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(to top, black, transparent), url(${service.src})`,
          }}
        >
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="text-4xl md:text-8xl font-bold uppercase text-white wrapper text-center"
            >
              {service?.heading}
            </motion.h2>
          </div>
        </div>
      </main>
    )
  );
};

export default ServiceDetailsPage;
