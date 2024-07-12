import { ReactNode, useState } from "react";
import Navbar from "../navbar";
import Sidebar from "../sideBar";

const GenericLayout = ({ children }: { children: ReactNode }) => {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(false);
  return (
    <>
      <Navbar
        sideMenuIsExpand={sideMenuIsExpand}
        setSideMenuIsExpand={setSideMenuIsExpand}
      />
      <Sidebar sideMenuIsExpand={sideMenuIsExpand} />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">{children}</div>
      </div>
    </>
  );
};

export default GenericLayout;
