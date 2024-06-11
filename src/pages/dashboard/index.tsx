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
    <div className="lg:w-4/5 lg:my-16 my-6 w-full px-6">
      <div className="flex lg:gap-20 gap-4 justify-center items-center">
        <TotalCard amount={totalPrevMonth} text="Previous Month" />
        <PrimaryCard amount={totalCurrentMonth} text="Current Month" />
        <TotalCard amount={totalAverage} text="Overall Budget" />
      </div>
      <div className="flex gap-4 flex-col lg:flex-row lg:gap-20 lg:my-20 my-4 lg:h-[60vh] ">
        <div className="lg:w-1/4 w-full">
          <FinancesForm />
        </div>
        <div className="lg:w-3/4 h-full lg:overflow-y-auto w-full">
          <FinancesTable />
        </div>
      </div>
    </div>
  );
};
