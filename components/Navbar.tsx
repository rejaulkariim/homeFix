import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="bg-background px-10 text-white flex justify-between items-center fixed top-0 right-0 left-0 z-10 backdrop:blur h-16">
      <div>Home Fix</div>
      <div className="flex gap-4 items-center">
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
      </div>
      <ModeToggle />
    </header>
  );
};

export default Navbar;
