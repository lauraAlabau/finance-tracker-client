import Table from "../../components/table";
import { useFinanceContext } from "../../contexts/financeContext";

export const Incomes = () => {
  const { records } = useFinanceContext();

  const onlyIncomes = records.filter((record) => record.amount >= 0);

  return (
    <div>
      <div className="w-full h-full mb-4 rounded lg:mt-10 lg:overflow-y-auto">
        <Table records={onlyIncomes} />
      </div>
    </div>
  );
};
