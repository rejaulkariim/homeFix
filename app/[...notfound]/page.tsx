"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiArrowBack, BiError } from "react-icons/bi";

const NotfoundPage = () => {
  const router = useRouter();
  return (
    <section>
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
            <BiError size={30} className="text-primary" />
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            The page you are looking for doesn&apos;t exist. Here are some
            helpful links:
          </p>

          <div className="flex justify-center items-center w-full mt-6 gap-x-3">
            <Button variant="outline" onClick={() => router.back()}>
              <BiArrowBack size={20} className="text-primary mr-2" />

              <span>Go back</span>
            </Button>

            <Button>
              <Link href="/">Take me home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotfoundPage;
