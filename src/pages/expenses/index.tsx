import Table from "../../components/table";
import { useFinanceContext } from "../../contexts/financeContext";

export const Expenses = () => {
  const { records } = useFinanceContext();

  const expenses = records.filter((record) => record.amount < 0);

  return (
    <div>
      <div className="w-full h-full mb-4 rounded lg:mt-10 lg:overflow-y-auto">
        <Table records={expenses} />
      </div>
    </div>
  );
};
