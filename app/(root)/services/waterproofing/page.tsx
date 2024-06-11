import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Waterproofing Service in Subang Jaya",
  description: "...",
};
const WaterproofingPage = () => {
  const gallary = [
    {
      id: "1",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991603/home_fix/po9qdoiu8t26qxnpqf7c.jpg",

      alt: "Membrane Waterproofing",
    },
    {
      id: "2",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991600/home_fix/xmiztvlwxyvftpumx20e.jpg",

      alt: "Membrane Waterproofing",
    },
    {
      id: "3",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991602/home_fix/qtryo3dqlmrfxw2iontd.jpg",
      alt: "Membrane Waterproofing",
    },
    {
      id: "4",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991616/home_fix/k5mp70yderkadc0g5ghm.jpg",
      alt: "Membrane Waterproofing",
    },
    {
      id: "5",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991601/home_fix/fcksinkfjrrqlewm0oc0.jpg",
      alt: "Membrane Waterproofing",
    },
    {
      id: "6",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991614/home_fix/qwobgqk98vfiiyoyvgne.jpg",
      alt: "Membrane Waterproofing",
    },
    {
      id: "7",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991607/home_fix/ikzcon5khbv19mm8r2kr.jpg",
      alt: "Roof Repair ",
    },
    {
      id: "8",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991607/home_fix/kcblm8erfpziscwmovw6.jpg",
      alt: "Roof Repair ",
    },
  ];
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2  py-10">
          <div className="flex flex-col justify-center gap-4">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Protect Your Home From Leaks & Damage
              </h1>

              <p className="text-base sm:text-lg text-foreground dark:text-muted-foreground">
                Don&apos;t let leaks turn your dream home into a nightmare! Our
                comprehensive waterproofing solutions shield your property from
                water damage, ensuring a safe and secure environment. From
                basements to bathrooms, we offer expert sealing methods that
                prevent leaks and save you money on costly repairs down the
                road. pen_spark
              </p>
            </div>

            <div>
              <Link
                href="https://wa.me/+6017-9928-203"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Contact us via whatsapp &rarr;
              </Link>
            </div>
          </div>

          {/*  Image */}
          <div className="w-full">
            <Image
              src="/kitchen-cabinet-design.png"
              height={1280}
              width={1920}
              alt="Kitchen Cabinet Design"
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="my-20">
        <div>
          <h2 className="text-2xl font-bold">Our Work</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {gallary.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <div className="max-w-sm hover:shadow-xl bg-accent/20 rounded-2xl p-4">
                <div className="w-full h-52 overflow-hidden rounded-xl relative group mt-4 cursor-pointer">
                  <Image
                    src={item.src}
                    height={500}
                    width={1200}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-125 duration-1000"
                  />
                </div>

                <div className="mt-4">
                  <h1 className="text-lg font-bold text-foreground">
                    {item.alt}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WaterproofingPage;
