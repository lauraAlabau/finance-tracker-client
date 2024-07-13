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
} from "../cells";
import { formatDate } from "date-fns";
import {
  CATEGORIES_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
} from "../../utils/contants";
const Table = () => {
  const { records, updateRecord, deleteRecord } = useFinanceContext();

  const updateCellRecord = (rowIndex: number, columnId: string, value: any) => {
    const id = records[rowIndex]?._id;
    updateRecord(id ?? "", { ...records[rowIndex], [columnId]: value });
  };

  const columns: Column<FinanceRecord>[] = useMemo(
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
          <div className="m-2.5 w-full">
            {formatDate(props.value, "dd MMM yyyy")}
          </div>
        ),
      },
      {
        Header: "",
        id: "delete",
        Cell: ({ row }) => (
          <button
            onClick={() => deleteRecord(row.original._id ?? "")}
            className="lg:pr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 32 32"
              className="w-6 h-6"
              fill="rgb(248 113 113)"
            >
              <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>
            </svg>
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
export default Table;
