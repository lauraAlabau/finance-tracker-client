import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import Navbar from "./components/navbar";
import { Dashboard } from "./pages/dashboard";
import { FinanceProvider } from "./contexts/financeContext";
import { Home } from "./pages/home";

function App() {
  return (
    <Router>
      <div className="w-screen lg:h-screen flex flex-col items-center bg-slate-950 text-slate-50 lg:overflow-hidden min-h-screen ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  <Navbar />
                  <FinanceProvider>
                    <Dashboard />
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
