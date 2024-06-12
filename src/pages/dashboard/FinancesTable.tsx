/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { useTable, Column } from "react-table";

import {
  FinanceRecord,
  useFinanceContext,
} from "../../contexts/financeContext";
import {
  EditableNumberCell,
  EditableSelectCell,
  EditableTextCell,
} from "../../components/cells";
import { formatDate } from "date-fns";
import {
  CATEGORIES_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
} from "../../utils/contants";

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
          <EditableSelectCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
            options={CATEGORIES_OPTIONS}
          />
        ),
      },
      {
        Header: "Payment",
        accessor: "payment",
        Cell: (props) => (
          <EditableSelectCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
            options={PAYMENT_METHOD_OPTIONS}
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
      data: records.sort(
        (a, b) => Date.parse(String(b.date)) - Date.parse(String(a.date))
      ),
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
