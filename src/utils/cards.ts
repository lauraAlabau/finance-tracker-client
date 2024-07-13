import {
  startOfMonth,
  subMonths,
  endOfMonth,
  isWithinInterval,
} from "date-fns";
import { useMemo } from "react";

import { FinanceRecord } from "../contexts/financeContext";

const Cards = ({ records }: { records: FinanceRecord[] }) => {
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

  return { totalPrevMonth, totalCurrentMonth, totalAverage };
};

export default Cards;
