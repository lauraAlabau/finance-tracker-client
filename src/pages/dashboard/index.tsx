import { useMemo } from "react";

import { FinancesForm } from "./FinancesForm";
import { FinancesTable } from "./FinancesTable";
import { useFinanceContext } from "../../contexts/financeContext";
import TotalCard from "../../components/totalCard";

export const Dashboard = () => {
  const { records } = useFinanceContext();

  const totalMonth = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });
    return totalAmount;
  }, [records]);

  return (
    <div className="w-4/5 my-16">
      <TotalCard totalMonth={totalMonth} />
      <div className="flex gap-20 my-20 h-[60vh]">
        <div className="w-1/4">
          <FinancesForm />
        </div>
        <div className="w-3/4 h-full overflow-y-auto">
          <FinancesTable />
        </div>
      </div>
    </div>
  );
};
