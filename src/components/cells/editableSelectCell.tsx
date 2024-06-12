import { useState } from "react";
import { CellProps } from "react-table";
import { FinanceRecord } from "../../contexts/financeContext";
import { GenericSelect } from "../selects";

interface EditableCellProps extends CellProps<FinanceRecord> {
  updateRecord: (rowIndex: number, columnId: string, value: string) => void;
  editable: boolean;
  options: string[];
}

export const EditableSelectCell = ({
  value: initialValue,
  row,
  column,
  updateRecord,
  editable,
  options,
}: EditableCellProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const onChange = (value: string) => {
    setValue(value);
    setIsEditing(false);
    updateRecord(row.index, column.id, value);
  };

  const onBlur = () => {
    setIsEditing(false);
  };
  return (
    <div
      onClick={() => editable && setIsEditing(true)}
      className={`${editable ? "cursor-pointer" : ""}`}
    >
      {isEditing ? (
        <GenericSelect
          options={options}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      ) : (
        <div className="p-2.5 w-full">{String(value)}</div>
      )}
    </div>
  );
};
