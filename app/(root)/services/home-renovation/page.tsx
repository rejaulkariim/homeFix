import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Home Renovation in Subang Jaya",
  description: "...",
};
const HomeRenovationPage = () => {
  const gallary = [
    {
      id: 1,
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697143240/home_fix/vpxvrhqcmbn8apy9fi4c.jpg",
      alt: "Home Renovation",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697144623/home_fix/litdhnxykrkmydbzqsow.jpg",
      alt: "Home Paint",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697143240/home_fix/tkiqbmrdr0wfixtqjpxy.jpg",
      alt: "Home Paint",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697145121/home_fix/vuamw51ar4tlqzchefel.jpg",
      alt: "Home Renovation",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1698006718/home_fix/jq6kof0uqs7hpywaiuyg.jpg",
      alt: "Home Renovation",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697145120/home_fix/sbnltla38i01b1dallya.jpg",
      alt: "Home Renovation",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697145120/home_fix/mahpu2nevcpnnuuensta.jpg",
      alt: "Home Renovation",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697145119/home_fix/v5plktgho9rhhs451o7m.jpg",
      alt: "Home Renovation",
    },
  ];
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2  py-10">
          <div className="flex flex-col justify-center gap-4">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Affordable Renovation Solutions for Every Room
              </h1>

              <p className="text-base sm:text-lg text-foreground dark:text-muted-foreground">
                Tired of outdated spaces but worried about breaking the bank? We
                specialize in creating beautiful and functional renovations that
                fit your budget. Whether you&apos;re dreaming of a modern
                kitchen, a spa-like bathroom, or a cozy living room refresh, our
                team of experts will work with you to find creative and
                cost-effective solutions. pen_spark
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
              src="https://res.cloudinary.com/swiftpos/image/upload/v1696993556/home_fix/vkuwldesezosrldwrr7z.jpg"
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

export default HomeRenovationPage;
