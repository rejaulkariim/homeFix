import { Check, Star } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const Reviews = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper className="flex flex-col items-center gap-8">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 my-8">
          <h2 className="text-3xl sm:text-5xl font-bold">
            What Our<span className="relative px-2">Customers</span>Say
          </h2>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
            </div>
            <div className="text-lg leading-8">
              <p>
                My aircon was on the fritz during the hottest week of the year!
                These guys came out quickly,{" "}
                <span className="p-0.5 bg-slate-800 text-white">
                  diagnosed the problem
                </span>
                , and had it fixed in no time. My home is cool and comfortable
                again, and I couldn&apos;t be happier. Thanks for being the best
                aircon service experts in Petaling Jaya!
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <Image
                height={80}
                width={80}
                className="rounded-full h-12 w-12 object-cover"
                src="/users/user-3.png"
                alt="user"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Sarah</p>
                <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm text-muted-foreground">Verified</p>
                </div>
              </div>
            </div>
          </div>

          {/* second user review */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
            </div>
            <div className="text-lg leading-8">
              <p>
                We recently had our aircon units overhauled, and the difference
                is amazing! The air quality is so much better, and the units are
                running much quieter. The technicians were professional,
                efficient, and explained everything clearly. Highly recommend
                these aircon experts!
                <span className="p-0.5 bg-slate-800 text-white"></span>
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <Image
                height={80}
                width={80}
                className="rounded-full h-12 w-12 object-cover"
                src="/users/user-4.jpg"
                alt="user"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Josh</p>
                <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm text-muted-foreground">Verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Reviews;
