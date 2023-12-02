"use client";

import { Button } from "@/components/ui/Button";
import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";
import { GoMoon } from "react-icons/go";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="h-10 w-10 px-0 border-none"
        onClick={handleThemeChange}
      >
        {theme === "light" ? (
          <>
            <GoMoon size={25} className="text-primary " />
          </>
        ) : (
          <>
            <BiSun size={25} className="text-primary" />
          </>
        )}
      </Button>
    </>
  );
};

export default ModeToggle;
