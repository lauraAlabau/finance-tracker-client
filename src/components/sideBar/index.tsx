import { Link } from "react-router-dom";
import { NavbarProps } from "../navbar";

const Sidebar = ({
  sideMenuIsExpand,
}: Pick<NavbarProps, "sideMenuIsExpand">) => {
  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform border-r border-slate-950 sm:translate-x-0 bg-[#081028]  ${
        !sideMenuIsExpand ? "-translate-x-full " : " transform-none"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-[#081028]">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-white rounded-lg hover:bg-cyan-700 group"
            >
              <svg
                className="w-5 h-5 transition duration-75 text-cyan-400 group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/incomes"
              className="flex items-center p-2 text-white rounded-lg hover:bg-cyan-700 group"
            >
              <svg
                className="w-5 h-5 transition duration-75 text-cyan-400 group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
                />
              </svg>
              <span className="ms-3">Incomes</span>
            </Link>
          </li>
          <li>
            <Link
              to="/expenses"
              className="flex items-center p-2 text-white rounded-lg hover:bg-cyan-700 group"
            >
              <svg
                className="w-5 h-5 transition duration-75 text-cyan-400 group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207"
                />
              </svg>
              <span className="ms-3">Expenses</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
