"use client";
import { useTheme } from "next-themes";
import { BiSolidMoon, BiSun } from "react-icons/bi";
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
        className="h-10 w-10 px-0 border-2 rounded-lg"
        onClick={handleThemeChange}
      >
        {theme === "light" ? (
          <>
            <BiSun
              size={22}
              className="text-primary rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
          </>
        ) : (
          <>
            <BiSolidMoon
              size={22}
              className="text-primary rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
          </>
        )}
      </Button>
    </>
  );
};

export default ModeToggle;
