import { ReactNode, useState } from "react";
import Navbar from "../navbar";
import Sidebar from "../sideBar";
import FormModal from "../formModal";

const GenericLayout = ({ children }: { children: ReactNode }) => {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  return (
    <>
      <Navbar
        sideMenuIsExpand={sideMenuIsExpand}
        setSideMenuIsExpand={setSideMenuIsExpand}
        formIsOpen={formIsOpen}
        setFormIsOpen={setFormIsOpen}
      />
      <Sidebar sideMenuIsExpand={sideMenuIsExpand} />
      <FormModal formIsOpen={formIsOpen} setFormIsOpen={setFormIsOpen} />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">{children}</div>
      </div>
    </>
  );
};

export default GenericLayout;
