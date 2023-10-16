"use client";
import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { Button } from "./ui/Button";

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
            <BsFillMoonFill size={25} className="text-primary " />
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
