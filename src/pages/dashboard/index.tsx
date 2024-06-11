import { useUser } from "@clerk/clerk-react";
import { FinancesForm } from "./FinancesForm";
import { FinancesTable } from "./FinancesTable";
import { useFinanceContext } from "../../contexts/financeContext";
import { useMemo } from "react";

export const Dashboard = () => {
  const { user } = useUser();

  const { records } = useFinanceContext();

  const totalMonth = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });
    return totalAmount;
  }, [records]);
  return (
    <div className="w-4/5">
      <h1 className="text-teal-50 text-center text-2xl font-bold mt-8">
        Welcome {user?.firstName || user?.emailAddresses[0].emailAddress}! Here
        are your finances:
      </h1>
      <FinancesForm />
      <div>Total Monthly: {totalMonth} €</div>
      <FinancesTable />
    </div>
  );
};
