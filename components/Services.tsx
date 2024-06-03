"use client";

import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const Services = () => {
  const peeks = [
    {
      title: "Kitchen Cabinets Design",
      image: "/Kitchen.png",
      href: "/kitchen-cabinet-design",
    },
  ];
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="my-4">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Our Trending Services
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {peeks.map((item) => (
            <div
              key={item.title}
              className="p-8 bg-[#F8F9FA] rounded-2xl flex flex-col justify-center items-center space-y-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                height={100}
                width={100}
                className="h-20 w-20 object-cover"
              />
              <p className="text-xl font-bold">{item.title}</p>

              <Link
                href={`/services/${item.href}`}
                className="hover:text-primary underline"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
