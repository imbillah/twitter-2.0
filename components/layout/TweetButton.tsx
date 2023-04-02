import Link from "next/link";
import React from "react";
import { FaFeather } from "react-icons/fa";
const TweetButton = () => {
  return (
    <Link href="/">
      {/* mobile */}
      <div
        className="
        mt-5
        lg:hidden
        rounded-full
        h-14
        w-14
        flex
        items-center
        justify-center
        bg-sky-500
        hover:bg-opacity-80
        transition
        cursor-pointer

        "
      >
        <FaFeather size={25} color="white" />
      </div>
      <div
        className="
      mt-5
      hidden
      lg:block
      rounded-full
      px-4 py-2
      bg-sky-500
      hover:bg-opacity-80
      transition
      cursor-pointer

      "
      >
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </Link>
  );
};

export default TweetButton;
