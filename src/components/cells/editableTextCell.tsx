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
          className="max-w-40 p-2.5 bg-transparent font-bold text-slate-50 focus-visible:ring-0 focus-visible:outline-0"
        />
      ) : (
        <div className="max-w-40 p-2.5 whitespace-break-spaces">
          {String(value)}
        </div>
      )}
    </div>
  );
};
