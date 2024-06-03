import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Modern Kitchen Cabinet Design Subang Jaya",
  description: "...",
};
const KitchenCabinetDesignPage = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2  py-10">
          <div className="flex flex-col justify-center gap-4">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
                Modern Kitchen Cabinets Design
              </h1>

              <p className="text-base sm:text-lg text-foreground dark:text-muted-foreground">
                Kitchen
              </p>

              <div className="flex items-center gap-4">
                <div className="inline-flex space-x-2">
                  <Star className="text-primary" />
                  <Star className="text-primary" />
                  <Star className="text-primary" />
                  <Star className="text-primary" />
                  <Star className="text-primary" />
                </div>
                <p className="paragraph">See Customer Reviews</p>
              </div>
              <p className="text-base sm:text-lg text-foreground dark:text-muted-foreground">
                Kitchen
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <Button
                asChild
                variant="default"
                className="w-full sm:w-fit text-white"
                size="lg"
              >
                see more
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-fit"
                size="lg"
              >
                <Link href="#pricing">Live Demo &rarr;</Link>
              </Button>
            </div>
          </div>

          {/*  Image */}
          <div className="w-full">
            <Image
              src="/home.jpg"
              height={1280}
              width={1920}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default KitchenCabinetDesignPage;
