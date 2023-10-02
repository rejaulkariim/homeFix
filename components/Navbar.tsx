import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenuAlt1 } from "react-icons/hi";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="bg-background px-10 text-white flex justify-between items-center fixed top-0 right-0 left-0 z-10 backdrop:blur h-16">
      <div>Home Fix</div>
      <div className="flex gap-4 items-center">
        <p>Home</p>
      </div>
      <ModeToggle />

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <HiMenuAlt1 size={30} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
