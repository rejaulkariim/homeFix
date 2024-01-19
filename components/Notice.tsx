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
    <div className="bg-primary text-white h-5 flex items-center justify-between px-4 md:px-10">
      <Link
        href="https://www.upwork.com/freelancers/~01bde2fb752a090f52"
        target="_blank"
      >
        <p className="text-xs hover:underline"> Build with 🖤 by rejaul.dev</p>
      </Link>

      <button onClick={hideNotice}>
        <MdCancel size={15} />
      </button>
    </div>
  ) : null;
};

export default Notice;
