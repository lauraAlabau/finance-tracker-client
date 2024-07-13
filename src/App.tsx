import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import { Dashboard } from "./pages/dashboard";
import { FinanceProvider } from "./contexts/financeContext";
import { Home } from "./pages/home";
import GenericLayout from "./components/genericLayout";
import { Incomes } from "./pages/incomes";
import { Expenses } from "./pages/expenses";

function App() {
  return (
    <Router>
      <div className="items-center min-h-screen bg-[#070E23] text-slate-50 cursor-default">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  <FinanceProvider>
                    <GenericLayout>
                      <Dashboard />
                    </GenericLayout>
                  </FinanceProvider>
                </SignedIn>
                <SignedOut>
                  <Home />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/incomes"
            element={
              <>
                <SignedIn>
                  <FinanceProvider>
                    <GenericLayout>
                      <Incomes />
                    </GenericLayout>
                  </FinanceProvider>
                </SignedIn>
              </>
            }
          />
          <Route
            path="/expenses"
            element={
              <>
                <SignedIn>
                  <FinanceProvider>
                    <GenericLayout>
                      <Expenses />
                    </GenericLayout>
                  </FinanceProvider>
                </SignedIn>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
