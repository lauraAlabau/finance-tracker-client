import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { SignedIn, useAuth } from "@clerk/clerk-react";
import { FinanceProvider } from "../../contexts/financeContext";
import GenericLayout from "../genericLayout";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <SignedIn>
      <FinanceProvider>
        <GenericLayout>{children}</GenericLayout>
      </FinanceProvider>
    </SignedIn>
  );
};

export default ProtectedRoute;
