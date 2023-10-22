"use client";

const Footer = () => {
  return (
    <footer className="wrapper flex justify-center py-10 px-4 md:px-10 border-t">
      <div className="text-center">
        <p className="text-lg uppercase">
          Address: 27, Jalan USJ 2/2G Subang Jaya
        </p>
        <p className="text-foreground">
          &copy; {new Date().getFullYear()}, Homefix all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
