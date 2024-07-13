import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from "@clerk/clerk-react";

import { useFinanceContext } from "../../contexts/financeContext";
import {
  CATEGORIES_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
} from "../../utils/contants";
import { NavbarProps } from "../navbar";

type Inputs = {
  description: string;
  amount: number;
  category: string;
  payment: string;
};

const FinancesForm = ({
  setFormIsOpen,
}: Pick<NavbarProps, "setFormIsOpen">) => {
  const { user } = useUser();
  const { addRecord } = useFinanceContext();

  const {
    register,
    handleSubmit,
    //formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(),
      ...data,
    };

    addRecord(newRecord);
    setFormIsOpen(false);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between p-6 text-cyan-50 "
    >
      <h2 className="mt-4 text-2xl">Add a new record</h2>
      <div className="flex flex-wrap mt-6 lg:mt-10 lg:gap-6">
        {/* FORM */}
        <div className="w-full">
          <label>Description:</label>
          <input
            type="text"
            required
            placeholder="Add a description"
            className="w-full p-2.5 mt-1 mb-4 bg-transparent border border-cyan-100 rounded-md text-slate-50"
            {...register("description")}
          />
        </div>
        <div className="w-full">
          <label>Amount:</label>
          <input
            type="number"
            required
            placeholder="Add an amount"
            className="w-full p-2.5 mt-1 mb-4 bg-transparent border border-cyan-100 rounded-md text-slate-50"
            {...register("amount")}
          />
        </div>
        <div className="w-full">
          <label>Category:</label>
          <select
            required
            defaultValue=""
            className="w-full p-2.5 mt-1 mb-4 bg-transparent border border-cyan-100 rounded-md text-slate-50
            invalid:text-gray-400 "
            {...register("category")}
          >
            <option value="" hidden>
              Select a Category
            </option>
            {CATEGORIES_OPTIONS.map((option) => (
              <option value={option} className="bg-slate-900 text-slate-50">
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label>Payment Method:</label>
          <select
            required
            defaultValue=""
            className="w-full p-2.5 mt-1 mb-4 bg-transparent border border-cyan-100 rounded-md text-slate-50
            invalid:text-gray-400 "
            {...register("payment")}
          >
            <option value="" hidden>
              Select a payment Method
            </option>
            {PAYMENT_METHOD_OPTIONS.map((option) => (
              <option value={option} className="bg-slate-900 text-slate-50">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* FOOTER */}
      <div className="fixed flex justify-between px-6 pt-5 -ml-6 border-t w-96 bottom-5 border-slate-800">
        <button
          onClick={() => setFormIsOpen(false)}
          type="submit"
          className="px-4 py-2 m-1 transition duration-300 ease-in-out border rounded-md cursor-pointer border-fuchsia-500 text-fuchsia-50 hover:bg-fuchsia-500 "
        >
          Close
        </button>
        <button
          type="submit"
          className="px-4 py-2 m-1 transition duration-300 ease-in-out border-none rounded-md cursor-pointer bg-fuchsia-600 text-slate-50 hover:bg-fuchsia-500 "
        >
          Add Record
        </button>
      </div>
    </form>
  );
};

export default FinancesForm;
