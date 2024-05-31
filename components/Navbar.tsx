"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-border/50 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            <p className="text-xl font-bold">
              Home <span className="text-primary">Fix</span>
            </p>
          </Link>

          <div className="h-full flex items-center space-x-4">
            <Link
              href="https://www.facebook.com/fixmyhome.my"
              target="_blank"
              className={buttonVariants({
                size: "sm",
                className: "hidden sm:flex items-center gap-1",
              })}
            >
              Follow
            </Link>

            <div className="sm:hidden">
              <Menu />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
