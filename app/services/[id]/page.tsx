"use client";
import CallToAction from "@/components/CallToAction";
import Gallary from "@/components/Gallary";
import Hearder from "@/components/Hearder";
import { heros } from "@/constants";
import { serviceType } from "@/types/services";
import { motion } from "framer-motion";

const ServiceDetailsPage = ({ params }: { params: { id: string } }) => {
  const service = heros.find((item: serviceType) => item.link === params.id);

  return (
    service && (
      <main>
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
              {service.heading}
            </motion.h2>
          </div>
        </div>

        {/* GALLARY */}
        <section className="wrapper">
          <Hearder
            heading="Explore Gallery"
            subtitle="Discover Our Work and Inspiration"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {service.gallary?.map((image: any, index: number) => (
              <Gallary
                key={image.id}
                src={image.src}
                alt={image.alt}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="wrapper">
          <CallToAction />
        </section>
      </main>
    )
  );
};

export default ServiceDetailsPage;
