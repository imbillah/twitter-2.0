import React from "react";
import {
  BellAlertIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  const items = [
    { label: "Home", href: "/", icon: HomeIcon },
    {
      label: "Notification",
      href: "/notification",
      icon: BellAlertIcon,
    },
    {
      label: "Profile",
      href: "/user/:id",
      icon: UserCircleIcon,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[235px]">
          <div className=" h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full mt-2">
            <Image src="/Twitter_logo.png" height={40} width={40} alt="" />
          </div>
          {items.map((item) => (
            <SidebarItem />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
