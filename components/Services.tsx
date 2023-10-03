import { services } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
const Services = () => {
  return (
    <section className="wrapper">
      <h2 className="text-2xl font-semibold text-center">Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((item) => (
          <div
            key={item.id}
            className="border-2 shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={item.src}
              alt={item.alt}
              height={300}
              width={500}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-foreground font-semibold mb-2">
                {item.heading}
              </h3>
              <p className="text-foreground mb-4">{item.description}</p>
              <Button asChild>
                <Link href={item.link} className="">
                  {item.cta}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
