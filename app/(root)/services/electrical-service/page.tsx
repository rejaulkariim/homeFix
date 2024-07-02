import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Electrical Service in Kajang, Selangor",
  description: "...",
};

const ElectricalServicePage = () => {
  const gallary = [
    {
      id: "1",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697137400/home_fix/tnvoxa2h0cyppmgveqk0.jpg",
      alt: "Repair DB Box",
    },
    {
      id: "2",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1696991604/home_fix/jcmdzxeotp9mn2scvqvo.jpg",
      alt: "Repair DB Box",
    },
    {
      id: "3",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697137400/home_fix/pspbq2rneez7eobqpobn.jpg",
      alt: "Install excluter Switch",
    },
    {
      id: "4",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697137400/home_fix/ktazr2fzkhrmkpiwpo10.jpg",
      alt: "Install DB Box",
    },
    {
      id: "5",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697137400/home_fix/mzdyewolkad3w0lbsm75.jpg",
      alt: "Repair DB Box",
    },
    {
      id: "6",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697137399/home_fix/w3bn3rbzrfzvo4fg1kcm.jpg",
      alt: "Install DB Box",
    },
    {
      id: "7",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697137399/home_fix/adnqh6cshgxjwn6morxi.jpg",
      alt: "Install DB Box",
    },
    {
      id: "8",
      src: "https://res.cloudinary.com/swiftpos/image/upload/v1697137758/home_fix/rtgdqnpp68vh3bf5jelk.jpg",
      alt: "Install Light",
    },
  ];
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2  py-10">
          <div className="flex flex-col justify-center gap-4">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Safe & Reliable Electrical Services
              </h1>

              <p className="text-base sm:text-lg text-foreground dark:text-muted-foreground">
                Keep your home safe and functioning smoothly with our
                comprehensive electrical services. We offer a variety of
                solutions for all your electrical needs, big or small.{" "}
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
              src="https://res.cloudinary.com/swiftpos/image/upload/v1697137399/home_fix/adnqh6cshgxjwn6morxi.jpg"
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
          <h2 className="text-2xl font-bold">Gallary</h2>
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

export default ElectricalServicePage;
