import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const ServiceCard = ({ service }: any) => {
  return (
    <div className="max-w-sm hover:shadow-xl bg-accent/20 rounded-2xl p-4 relative">
      <Link
        href={`/services${service.href}`}
        className="absolute inset-0 z-10"
      />
      <div className="w-full h-52 overflow-hidden rounded-xl relative group mt-4 cursor-pointer">
        <Image
          src={service.image}
          height={500}
          width={1200}
          alt="service"
          className="w-full h-full object-cover group-hover:scale-125 duration-1000"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold text-primary">{service.title}</h3>
        {/* <p className="paragraph">{service.title}</p> */}
      </div>

      <div className="flex gap-4 mt-4">
        <Link
          href={`/services${service.href}`}
          className={cn(buttonVariants({}))}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
