import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

const Hero = () => {
  return (
    <>
      {/* <section className="w-full h-[calc(100vh-4rem)]">
        <Swiper
          pagination={{
            clickable: true,
          }}
          speed={750}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper w-full h-full"
        >
          {heros.map((item: any) => (
            <SwiperSlide key={item.id}>
              <div className="w-full h-full relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-full object-cover"
                />
                <Overlay />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[2] space-y-4 text-white px-2 w-full">
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="text-3xl md:text-7xl leading-10 font-bold uppercase "
                    >
                      {item.heading}
                    </motion.h1>
                  </div>
                  <div className="overflow-hidden max-w-2xl mx-auto">
                    <motion.p
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                      className="text-sm md:text-lg"
                    >
                      {item.paragraph}
                    </motion.p>
                  </div>
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.6,
                      }}
                    >
                      <Link
                        href={`services/${item.link}`}
                        className={buttonVariants({
                          variant: "default",
                          size: "lg",
                          className: "text-white",
                        })}
                      >
                        {item.cta}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}

      <section className="section-padding">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 space-y-2">
              <h1 className="relative w-fit tracking-tight text-balance font-bold !leading-tight text-foreground text-3xl md:text-5xl">
                Fast, Reliable{" "}
                <span className="bg-green-600 px-2 text-white">Aircon</span>{" "}
                Servicing in Subang Jaya
              </h1>
              <p className="paragraph">
                Is Your Aircon Making You Hot & Bothered? We&apos;ve Got the
                Fix!
              </p>

              <div className="flex">
                <ul className="space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                  <div className="space-y-2">
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Aircon Supply and Installation
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Aircon Chemical Wash
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Aircon Repair
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Aircon General Cleaning
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Aircon Overhaul Cleaning
                    </li>
                  </div>
                </ul>
              </div>

              <div>
                <Link
                  href="https://wa.me/+6017-9928-203"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Contact us via whatsapp
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div>
              <Image
                src="https://res.cloudinary.com/swiftpos/image/upload/v1697139673/home_fix/dg7bnmqfvw0bog40f3lv.jpg"
                alt="hero"
                width={1000}
                height={1000}
                className="mt-6 max-h-[70vh] object-cover object-center rounded-lg"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Hero;
