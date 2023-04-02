import React from "react";
import { IconType } from "react-icons";

interface sidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}
const SidebarItem: React.FC<sidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      {/* mobile view */}
      <div
        className="flex items-center justify-center rounded-full w-14 h-14 p-4 cursor-pointer relative lg:hidden
      hover:bg-slate-400 hover:bg-opacity-20"
      >
        <Icon size={20} color="white" />
        <p
          className="hidden lg:block text-white
        text-xl"
        ></p>
      </div>
      {/* dwsktop view */}
      <div>
        <div
          className="hidden relative lg:flex items-center gap-4 p-4 hover:bg-slate-400 hover:rounded-sm
        hover:bg-opacity-20 cursor-pointer"
        >
          <Icon size={20} color="white" />
          <p
            className="hidden lg:block text-white
        text-xl"
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
