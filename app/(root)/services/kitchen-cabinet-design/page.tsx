import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Kitchen Cabinet Design in Kajang, Selangor",
  description: "...",
};

const gallary = [
  {
    id: "1",
    src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991309/home_fix/ohbh4nbe0vf4l6gsmta5.jpg",
    alt: "kitchen cabinet design",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991623/home_fix/dwq2xnhh2ovdolqzzull.jpg",
    alt: "kitchen cabinet design",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991614/home_fix/y2zjymjopzp57vionz5l.jpg",
    alt: "kitchen cabinet design",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991610/home_fix/p1hugxosn4m1tuxkyn1x.jpg",
    alt: "kitchen cabinet design",
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/swiftpos/image/upload/v1696993556/home_fix/zopy5ln3mhambg6wc8qp.jpg",
    alt: "kitchen cabinet design",
  },
  {
    id: "6",
    src: "https://res.cloudinary.com/swiftpos/image/upload/v1696993556/home_fix/xvnccwf9o2topvbsr7mn.jpg",
    alt: "Bedroom Almirah Design",
  },
  {
    id: "7",
    src: "https://res.cloudinary.com/swiftpos/image/upload/v1696993555/home_fix/bj5vlsjl8lweeij77crn.jpg",
    alt: "Bedroom Almirah Design",
  },
  {
    id: "8",
    src: "https://res.cloudinary.com/swiftpos/image/upload/v1696993556/home_fix/sqrhwogv1rfod1b1ke9g.jpg",
    alt: "Bedroom Almirah Design",
  },
];
const KitchenCabinetDesignPage = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2  py-10">
          <div className="flex flex-col justify-center gap-4">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Modern Kitchen Cabinets Design
              </h1>

              <p className="text-base sm:text-lg text-foreground dark:text-muted-foreground">
                We offer a diverse range of cabinet styles, materials, and
                finishes to suit your taste and lifestyle. From sleek,
                minimalist designs to bold statement pieces, our cabinets are
                crafted with precision and attention to detail. Our focus on
                quality ensures that each cabinet is not only beautiful but also
                durable and practical.
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
              src="https://res.cloudinary.com/swiftpos/image/upload/v1696991614/home_fix/y2zjymjopzp57vionz5l.jpg"
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
              <div className="max-w-sm bg-accent/20 rounded-2xl p-4">
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
                  <h1 className="text-lg font-bold text-primary">{item.alt}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default KitchenCabinetDesignPage;
