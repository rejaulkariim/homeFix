"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";

import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="bg-background px-4 md:px-10 text-white flex justify-between items-center fixed top-0 right-0 left-0 z-10 backdrop:blur h-16">
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
        <Link href="/">Renovation</Link>
        <Link href="/">Waterproofing</Link>
        <Link href="/">Electronics Service</Link>
        <Link href="/">Air Conditioning Service</Link>
        <Link href="/">Kitchen Cabinet Design</Link>
      </div>

      <div className="flex items-center gap-2">
        <ModeToggle />
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <HiMenuAlt1 size={30} className="text-primary" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
