import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { FinanceProvider } from "./contexts/financeContext";
// import { SignedIn, UserButton } from "@clerk/clerk-react";
import Navbar from "./components/navbar";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Home } from "./pages/home";

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen flex flex-col items-center bg-slate-950 text-slate-50	">
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
