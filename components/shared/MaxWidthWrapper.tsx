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
    <div className={cn(`max-w-screen-xl mx-auto px-4 md:px-0`, className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
