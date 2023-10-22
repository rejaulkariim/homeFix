"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/Sheet";

import { navlinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFacebook } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="px-4 md:px-40 text-white flex justify-between items-center sticky top-0 z-[10] backdrop-blur h-16">
      <div>
        <Link
          href="/"
          className="text-2xl font-bold uppercase text-foreground "
        >
          Home{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Fix
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 items-center text-foreground">
        {navlinks.map((item) => {
          const isActive =
            (pathname.includes(item.link) && item.link.length > 1) ||
            pathname === item.link;
          return (
            <Link
              href={item.link}
              key={item.id}
              className={`${
                isActive ? "text-gradient" : "text-foreground"
              } uppercase `}
            >
              <span>{item.cta}</span>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="https://www.facebook.com/fixmyhome.my"
          target="_blank"
          className="text-blue-500"
        >
          <BsFacebook size={30} />
        </Link>
        <ModeToggle />

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <HiMenuAlt1 size={30} className="text-primary" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <div className="flex flex-col items-start gap-4 text-foreground">
                  {navlinks.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <Link
                        href={item.link}
                        className="py-2 w-5/6 mx-auto bg-gradient-to-r from-secondary to-primary text-white rounded-lg"
                      >
                        {item.cta}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
