import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Modern Kitchen Cabinet Design Subang Jaya",
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
                We are specialist for Kitchen cabinet design
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

      <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {gallary.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                height={500}
                width={500}
                className="object-cover h-64"
              />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default KitchenCabinetDesignPage;
