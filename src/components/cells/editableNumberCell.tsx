import { useState } from "react";
import { CellProps } from "react-table";
import { FinanceRecord } from "../../contexts/financeContext";

interface EditableCellProps extends CellProps<FinanceRecord> {
  updateRecord: (rowIndex: number, columnId: string, value: number) => void;
  editable: boolean;
}

export const EditableNumberCell = ({
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
          type="number"
          onBlur={onBlur}
          className="max-w-20 p-2.5 bg-transparent  text-slate-50 focus-visible:ring-0 focus-visible:outline-0"
        />
      ) : (
        <div
          className={`${
            value < 0 ? "text-red-400" : "text-green-400"
          } p-2.5 w-full `}
        >
          {value < 0 ? "- " : "+ "}
          {String(Math.abs(value))}
        </div>
      )}
    </div>
  );
};
