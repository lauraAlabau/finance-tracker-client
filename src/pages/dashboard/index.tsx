import { useMemo } from "react";

import { FinancesForm } from "./FinancesForm";
import { FinancesTable } from "./FinancesTable";
import { useFinanceContext } from "../../contexts/financeContext";
import TotalCard from "../../components/totalCard";
import {
  endOfMonth,
  isWithinInterval,
  startOfMonth,
  subMonths,
} from "date-fns";
import PrimaryCard from "../../components/primaryCard";

export const Dashboard = () => {
  const { records } = useFinanceContext();

  const totalPrevMonth = useMemo(() => {
    let totalAmount = 0;
    const currentDate = new Date();
    const prevMonthStart = startOfMonth(subMonths(currentDate, 1));
    const prevMonthEnd = endOfMonth(subMonths(currentDate, 1));

    records.forEach((record) => {
      if (
        isWithinInterval(record.date, {
          start: prevMonthStart,
          end: prevMonthEnd,
        })
      ) {
        totalAmount += record.amount;
      }
    });

    return totalAmount;
  }, [records]);

  const totalCurrentMonth = useMemo(() => {
    let totalAmount = 0;
    const currentDate = new Date();
    const currentMonthStart = startOfMonth(currentDate);
    const currentMonthEnd = endOfMonth(currentDate);

    records.forEach((record) => {
      if (
        isWithinInterval(record.date, {
          start: currentMonthStart,
          end: currentMonthEnd,
        })
      ) {
        totalAmount += record.amount;
      }
    });

    return totalAmount;
  }, [records]);

  const totalAverage = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });
    return totalAmount;
  }, [records]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-8 mb-4">
        <div className="flex items-center justify-center h-24 rounded">
          <TotalCard amount={totalPrevMonth} text="Previous Month" />
        </div>
        <div className="flex items-center justify-center h-24 rounded">
          <PrimaryCard amount={totalCurrentMonth} text="Current Month" />
        </div>
        <div className="flex items-center justify-center h-24 rounded">
          <TotalCard amount={totalAverage} text="Overall Budget" />
        </div>
      </div>
      <div className="w-full h-full mb-4 rounded lg:mt-20 lg:overflow-y-auto">
        <FinancesForm />
      </div>
      <div className="w-full h-full mb-4 rounded lg:mt-10 lg:overflow-y-auto">
        <FinancesTable />
      </div>
    </div>
  );
};
