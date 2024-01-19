import { AlignRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/Sheet";
import NavItems from "./NavItems";
const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <AlignRight className="h-4 w-4" />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col gap-6 bg-background md:hidden"
          side="left"
        >
          <div className="flex items-center gap-2">
            <p className="uppercase">
              Home <span className="text-lg font-bold text-primary">Fix</span>
            </p>
          </div>

          {/* <Separator className="border" /> */}
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
