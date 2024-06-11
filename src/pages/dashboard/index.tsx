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
    <div className="w-4/5 my-16">
      <div className="flex gap-20 justify-center items-center">
        <TotalCard amount={totalPrevMonth} text="Previous Month" />
        <PrimaryCard amount={totalCurrentMonth} text="Current Month" />
        <TotalCard amount={totalAverage} text="Overall Budget" />
      </div>
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
