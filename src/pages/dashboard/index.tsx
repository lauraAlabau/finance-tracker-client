import { useMemo } from "react";

import { useFinanceContext } from "../../contexts/financeContext";
import TotalCard from "../../components/totalCard";
import {
  endOfMonth,
  isWithinInterval,
  startOfMonth,
  subMonths,
} from "date-fns";
import PrimaryCard from "../../components/primaryCard";
import Table from "../../components/table";

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
      <div className="grid grid-cols-3 gap-4 mt-8 mb-4 lg:gap-8">
        <TotalCard amount={totalPrevMonth} text="Previous Month" />
        <PrimaryCard amount={totalCurrentMonth} text="Current Month" />
        <TotalCard amount={totalAverage} text="Overall Budget" />
      </div>

      <div className="w-full h-full mb-4 rounded lg:mt-20 lg:overflow-y-auto">
        <Table />
      </div>
    </div>
  );
};
