import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useUser();
  return (
    <div className="bg-teal-700 py-2.5 lg:px-20 px-6 flex justify-between items-center text-teal-50 w-full h-14 font-bold">
      <SignedIn>
        <h1 className="text-teal-50 text-center lg:text-2xl ">
          Welcome {user?.firstName || user?.emailAddresses[0].emailAddress}!
          <span className="hidden lg:inline-flex lg:ml-2">
            Here are your finances:
          </span>
        </h1>
        <div className="flex items-center">
          <Link to={"/"} className="mr-5 hover:text-teal-200">
            Dashboard
          </Link>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
};

export default Navbar;
