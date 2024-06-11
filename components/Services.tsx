"use client";

import ServiceCard from "./ServiceCard";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const Services = () => {
  const peeks = [
    {
      title: "Kitchen Cabinets Design",
      image:
        "https://res.cloudinary.com/swiftpos/image/upload/v1696991309/home_fix/ohbh4nbe0vf4l6gsmta5.jpg",
      href: "/kitchen-cabinet-design",
    },
    {
      title: "Home Renovation",
      image:
        "https://res.cloudinary.com/swiftpos/image/upload/v1697144623/home_fix/litdhnxykrkmydbzqsow.jpg",
      href: "/home-renovation",
    },
    {
      title: "Electrical Service",
      image:
        "https://res.cloudinary.com/swiftpos/image/upload/v1697137400/home_fix/tnvoxa2h0cyppmgveqk0.jpg",
      href: "/electrical-service",
    },
    {
      title: "Waterproofing",
      image:
        "https://res.cloudinary.com/swiftpos/image/upload/v1697140030/home_fix/ifr4g4oi5zxhxjhuv4wq.jpg",
      href: "/waterproofing",
    },
    {
      title: "Plumbing",
      image:
        "https://res.cloudinary.com/swiftpos/image/upload/v1697140378/home_fix/xmvumn9akyxivz9xzapj.jpg",
      href: "/plumbing",
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
          {peeks.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
