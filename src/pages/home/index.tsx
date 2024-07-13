import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import logo from "../../assets/logos/logo-home.svg";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:-translate-y-10">
      <div>
        <img src={logo} className="w-80" alt="BudgetBuddy Logo" />
      </div>
      <div className="p-10 text-4xl font-bold text-center lg:pb-0 lg:p-20 lg:text-6xl text-slate-300 lg:mb-20">
        Record your expenses and income easily
      </div>
      <div className="flex gap-8 text-xl font-semibold">
        <div className="px-5 py-2.5 hover:bg-fuchsia-600 border-2 border-cyan-500 rounded-md hover:border-fuchsia-200">
          <SignInButton mode="modal">Login</SignInButton>
        </div>
        <div className="px-5 py-2.5 text-cyan-900  border-2 bg-cyan-500 rounded-md  border-cyan-200 hover:border-fuchsia-200 hover:bg-fuchsia-600 hover:text-fuchsia-100">
          <SignUpButton mode="modal" />
        </div>
      </div>
    </div>
  );
};
