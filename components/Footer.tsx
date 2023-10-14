"use client";

import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="wrapper flex justify-between items-center py-10 px-4 md:px-10 border-t">
      <p className="text-foreground">
        &copy; {new Date().getFullYear()}, Homefix all rights reserved
      </p>

      <Link href="https://www.facebook.com/fixmyhome.my" target="_blank">
        <BsFacebook size={25} />
      </Link>
    </footer>
  );
};

export default Footer;
