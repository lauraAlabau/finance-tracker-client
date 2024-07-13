import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedOut } from "@clerk/clerk-react";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home";
import { Incomes } from "./pages/incomes";
import { Expenses } from "./pages/expenses";
import ProtectedRoute from "./components/protectedRoutes/intex";

function App() {
  return (
    <Router>
      <div className="items-center min-h-screen bg-[#070E23] text-slate-50 cursor-default">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
                <SignedOut>
                  <Home />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/incomes"
            element={
              <ProtectedRoute>
                <Incomes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/expenses"
            element={
              <ProtectedRoute>
                <Expenses />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
