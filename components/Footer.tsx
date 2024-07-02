import Link from "next/link";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="h-16">
      <MaxWidthWrapper>
        <div>
          <p>
            Address: 27, jalan usj 2/2G, Subang jaya, 47630 Shah Alam, Selangor
          </p>
        </div>
        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex items-center justify-center">
            <p>
              This website is build by{" "}
              <Link
                href="https://appbrews.co"
                rel="canonical"
                target="_blank"
                className="font-bold"
              >
                App Brews
              </Link>
            </p>
            {/* <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Cookie Policy
              </Link>
            </div> */}
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
