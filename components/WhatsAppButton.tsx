"use client";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-green-500 p-3 rounded-full">
      <Link href="https://wa.me/+6017-9928-203">
        <BsWhatsapp size={30} className="text-white" />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
