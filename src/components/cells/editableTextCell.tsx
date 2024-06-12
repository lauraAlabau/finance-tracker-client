import { useState } from "react";
import { CellProps } from "react-table";
import { FinanceRecord } from "../../contexts/financeContext";

interface EditableCellProps extends CellProps<FinanceRecord> {
  updateRecord: (rowIndex: number, columnId: string, value: string) => void;
  editable: boolean;
}

export const EditableTextCell = ({
  value: initialValue,
  row,
  column,
  updateRecord,
  editable,
}: EditableCellProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    setIsEditing(false);
    updateRecord(row.index, column.id, value);
  };

  return (
    <div
      onClick={() => editable && setIsEditing(true)}
      className={`${editable ? "cursor-pointer" : ""}`}
    >
      {isEditing ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          onBlur={onBlur}
          className="w-full p-2.5 bg-transparent border border-teal-100 rounded-md text-slate-50"
        />
      ) : (
        <div className="p-2.5 w-full">{String(value)}</div>
      )}
    </div>
  );
};
