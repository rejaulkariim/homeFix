import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Plumbing Service in Subang Jaya",
  description: "...",
};

const PlumbingPage = () => {
  const gallary = [
    {
      id: "1",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697144545/home_fix/s6eqxh5agjplagitq8vf.jpg",
      alt: "Installation outdoor filter",
    },
    {
      id: "2",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697144545/home_fix/dd2rgq2jfvvdpfrnkqiv.jpg",
      alt: "Repair",
    },
    {
      id: "3",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697144830/home_fix/lp2p803bwf7bl2kmregs.jpg",
      alt: "Installation Pump",
    },
    {
      id: "4",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697145119/home_fix/s3pxzitsodvpu2yo2gpj.jpg",
      alt: "Repair",
    },
    {
      id: "5",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697145119/home_fix/uchpty1ujprqckvfcjdd.jpg",
      alt: "Repair",
    },
    {
      id: "6",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697145119/home_fix/s3pxzitsodvpu2yo2gpj.jpg",
      alt: "Repair",
    },
    {
      id: "7",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697144378/home_fix/nos48hmutvfrd34njzb2.jpg",
      alt: "Repair",
    },
    {
      id: "8",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697144378/home_fix/gv08zrsrsilvdfhxaaz0.jpg",
      alt: "Repair",
    },
  ];
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2  py-10">
          <div className="flex flex-col justify-center gap-4">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Expert Plumbing Solutions
              </h1>

              <p className="text-base sm:text-lg text-foreground dark:text-muted-foreground">
                Clogged drains, leaky pipes, or plumbing emergencies got you
                down? We&apos;re your one-stop shop for all your plumbing needs!
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
              src="https://res.cloudinary.com/swiftpos/image/upload/v1697145119/home_fix/s3pxzitsodvpu2yo2gpj.jpg"
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

export default PlumbingPage;
