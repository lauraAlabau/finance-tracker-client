import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

import logo from "../../assets/logos/logo.svg";
import { Dispatch, SetStateAction } from "react";

export interface NavbarProps {
  sideMenuIsExpand: boolean;
  setSideMenuIsExpand: Dispatch<SetStateAction<boolean>>;
  formIsOpen: boolean;
  setFormIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({
  sideMenuIsExpand,
  setSideMenuIsExpand,
  formIsOpen,
  setFormIsOpen,
}: NavbarProps) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#081028] border-b border-slate-950">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              onClick={() => setSideMenuIsExpand(!sideMenuIsExpand)}
              className="inline-flex items-center p-2 text-sm rounded-lg text-cyan-500 sm:hidden hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:focus:ring-cyan-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link to="/" className="flex ms-2 md:me-24">
              <img
                src={logo}
                className="h-6 me-3 sm:h-7"
                alt="BudgetBuddy Logo"
              />
              <span className="text-sm font-semibold lg:text-xl text-cyan-300 whitespace-nowrap">
                Budget<span className="text-[#CB3EFF]">Buddy</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <span className="sr-only">Open form add record</span>
              <button
                className="px-4 py-2 mr-6 text-sm rounded-lg bg-cyan-600 hover:bg-cyan-500"
                onClick={() => setFormIsOpen(!formIsOpen)}
              >
                Add Record
              </button>
              <div>
                <UserButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
