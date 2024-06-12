/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import { useTable, Column, CellProps } from "react-table";

import {
  FinanceRecord,
  useFinanceContext,
} from "../../contexts/financeContext";
import { EditableNumberCell, EditableTextCell } from "../../components/cells";
import { formatDate } from "date-fns";

interface EditableCellProps extends CellProps<FinanceRecord> {
  updateRecord: (rowIndex: number, columnId: string, value: any) => void;
  editable: boolean;
}

const EditableCell: React.FC<EditableCellProps> = ({
  value: initialValue,
  row,
  column,
  updateRecord,
  editable,
}) => {
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

export const FinancesTable = () => {
  const { records, updateRecord, deleteRecord } = useFinanceContext();

  const updateCellRecord = (rowIndex: number, columnId: string, value: any) => {
    const id = records[rowIndex]?._id;
    updateRecord(id ?? "", { ...records[rowIndex], [columnId]: value });
  };

  const columns: Array<Column<FinanceRecord>> = useMemo(
    () => [
      {
        Header: "Description",
        accessor: "description",
        Cell: (props) => (
          <EditableTextCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
          />
        ),
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: (props) => (
          <EditableNumberCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
          />
        ),
      },
      {
        Header: "Category",
        accessor: "category",
        Cell: (props) => (
          <EditableCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
          />
        ),
      },
      {
        Header: "Payment",
        accessor: "payment",
        Cell: (props) => (
          <EditableCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
          />
        ),
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: (props) => (
          <div className="p-2.5 w-full">
            {formatDate(props.value, "dd MMM yyyy")}
          </div>
        ),
      },
      {
        Header: "Delete",
        id: "delete",
        Cell: ({ row }) => (
          <button onClick={() => deleteRecord(row.original._id ?? "")}>
            Delete
          </button>
        ),
      },
    ],
    [records]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: records,
    });

  return (
    <div className="overflow-x-auto">
      <table
        {...getTableProps()}
        className="w-full mt-5 border-collapse shadow-md"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-3 text-base text-left bg-teal-800 first-of-type:rounded-tl-md last-of-type:rounded-tr-md text-teal-50"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="border-b border-teal-800/40 bg-teal-800/10"
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-4 py-3 text-left">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
