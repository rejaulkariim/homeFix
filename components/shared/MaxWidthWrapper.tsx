import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `h-full w-full max-w-screen-xl mx-auto px-2.5 md:px-10`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
