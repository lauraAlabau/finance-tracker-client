import { SignInButton, SignUpButton } from "@clerk/clerk-react";

export const Home = () => {
  return (
    <div className="flex flex-col items-center my-auto">
      <div className="lg:text-9xl text-6xl font-bold p-20 text-center text-teal-50/90 lg:-mt-60 -mt-32 ">
        Record your expenses and income easily
      </div>
      <div className="flex gap-8 text-xl font-semibold">
        <div className="px-5 py-2.5 hover:bg-teal-600 border-2 border-teal-500 rounded-md hover:border-teal-200">
          <SignInButton mode="modal">Login</SignInButton>
        </div>
        <div className="px-5 py-2.5 text-teal-900  border-2 bg-teal-500 rounded-md  border-teal-200 hover:border-teal-200 hover:bg-teal-600 hover:text-teal-100">
          <SignUpButton mode="modal" />
        </div>
      </div>
    </div>
  );
};
