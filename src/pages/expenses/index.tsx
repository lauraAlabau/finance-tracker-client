import PrimaryCard from "../../components/primaryCard";
import Table from "../../components/table";
import TotalCard from "../../components/totalCard";
import { useFinanceContext } from "../../contexts/financeContext";
import cards from "../../utils/cards";

export const Expenses = () => {
  const { records } = useFinanceContext();

  const expenses = records.filter((record) => record.amount < 0);

  const { totalAverage, totalCurrentMonth, totalPrevMonth } = cards({
    records: expenses,
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-8 mb-4 lg:gap-8">
        <TotalCard amount={totalPrevMonth} text="Previous Month" />
        <PrimaryCard amount={totalCurrentMonth} text="Current Month" />
        <TotalCard amount={totalAverage} text="Overall Budget" />
      </div>
      <div className="w-full h-full mb-4 rounded lg:mt-10 lg:overflow-y-auto">
        <Table records={expenses} />
      </div>
    </div>
  );
};
