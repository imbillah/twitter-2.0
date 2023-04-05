import React from "react";
import { BsHouseFill, BsBellFill, BsTwitter } from "react-icons/bs";
import SidebarItem from "./SidebarItem";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import Link from "next/link";
import TweetButton from "./TweetButton";
const Sidebar = () => {
  const items = [
    { label: "Home", href: "/", icon: BsHouseFill, id: 101 },
    {
      label: "Notification",
      href: "/notification",
      icon: BsBellFill,
      id: 102,
    },
    {
      label: "Profile",
      href: "/user/:id",
      icon: FaUser,
      id: 103,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[235px]">
          <div
            className="
          h-14 w-14 p-4 flex items-center justify-center rounded-full transition
          "
          >
            <Link href="/">
              <BsTwitter size={30} className="text-sky-500" />
            </Link>
          </div>
          {items.map((item) => (
            <SidebarItem
              key={item.id}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
          <TweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
