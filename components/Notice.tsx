"use client";
import Link from "next/link";
import { useState } from "react";
import { MdCancel } from "react-icons/md";

const Notice = () => {
  const [showNotice, setShowNotice] = useState(true);

  const hideNotice = () => {
    setShowNotice(false);
  };

  return showNotice ? (
    <div className="bg-gradient-to-r from-primary to-secondary text-white h-8 flex items-center justify-between px-4 md:px-10">
      <p className="text-center flex-1 text-sm hover:underline uppercase font-semibold tracking-wider">
        <Link
          href="https://www.upwork.com/freelancers/~01bde2fb752a090f52"
          target="_blank"
        >
          {" "}
          Build with 🖤 by Rejaul.dev
        </Link>
      </p>

      <button onClick={hideNotice}>
        <MdCancel size={25} />
      </button>
    </div>
  ) : null;
};

export default Notice;
