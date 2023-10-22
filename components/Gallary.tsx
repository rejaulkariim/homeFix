import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryProps {
  src: string;
  alt: string;
  index: number;
}

const Gallary: React.FC<GalleryProps> = ({ src, alt, index }) => {
  return (
    <div>
      <motion.div
        initial={{ scale: 0, borderRadius: "100px" }}
        whileInView={{ scale: 1, borderRadius: "0.75rem" }}
        transition={{ ease: "easeInOut", duration: 1.35, delay: index / 20 }}
        className="w-full h-[25rem] overflow-hidden rounded-xl relative group hover:scale-90 duration-700"
      >
        <Image
          src={src}
          alt={alt}
          width={500}
          height={600}
          priority
          className="w-full h-full object-cover group-hover:scale-125 duration-1000"
        />
        <p className="text-base text-primary uppercase absolute bottom-4 left-4 bg-black bg-opacity-75 p-2 rounded-md">
          {alt}
        </p>
      </motion.div>
    </div>
  );
};

export default Gallary;
