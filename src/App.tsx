import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import { Dashboard } from "./pages/dashboard";
import { FinanceProvider } from "./contexts/financeContext";
import { Home } from "./pages/home";
import GenericLayout from "./components/genericLayout";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
