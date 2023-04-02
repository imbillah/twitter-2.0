import React, { ReactNode } from "react";
import Sidebar from "./layout/Sidebar";
import FollowBar from "./layout/FollowBar";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black ">
      <div className="container mx-auto h-full xl:px-30 max-w-6xl">
        <div className="h-full grid grid-cols-4">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1.5px] border-neutral-800">
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
