import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-teal-700 py-2.5 px-5 flex justify-end items-center text-teal-50 w-full h-14  font-bold">
      <SignedIn>
        <Link to={"/"} className="mr-5 hover:text-teal-200">
          Dashboard
        </Link>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Navbar;
