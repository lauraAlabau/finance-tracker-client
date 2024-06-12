import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from "@clerk/clerk-react";

import { useFinanceContext } from "../../contexts/financeContext";
import {
  CATEGORIES_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
} from "../../utils/contants";

type Inputs = {
  description: string;
  amount: number;
  category: string;
  payment: string;
};

export const FinancesForm = () => {
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
    reset();
  };
  return (
    <div className="text-teal-200 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:flex sm:flex-wrap sm:justify-between"
      >
        <div className="sm:w-1/2 sm:pr-4 lg:w-full lg:p-0">
          <label className="block mb-1 font-semibold">Description:</label>
          <input
            type="text"
            required
            placeholder="Add a description"
            className="w-full p-2.5 mt-1 mb-4 bg-transparent border border-teal-100 rounded-md text-slate-50"
            {...register("description")}
          />
        </div>
        <div className="sm:w-1/2 sm:pl-4 lg:w-full lg:p-0">
          <label>Amount:</label>
          <input
            type="number"
            required
            placeholder="Add an amount"
            className="w-full p-2.5 mt-1 mb-4 bg-transparent border border-teal-100 rounded-md text-slate-50"
            {...register("amount")}
          />
        </div>
        <div className="lg:w-full sm:w-1/2 sm:pr-4 lg:p-0">
          <label>Category:</label>
          <select
            required
            defaultValue=""
            className="w-full p-2.5 mt-1 mb-4 bg-transparent border border-teal-100 rounded-md text-slate-50
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
        <div className="sm:w-1/2 sm:pl-4 lg:w-full lg:p-0">
          <label>Payment Method:</label>
          <select
            required
            defaultValue=""
            className="w-full p-2.5 mt-1 mb-4 bg-transparent border border-teal-100 rounded-md text-slate-50
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
        <button
          type="submit"
          className="px-4 py-2 m-1 transition duration-300 ease-in-out bg-teal-600 border-none rounded cursor-pointer text-slate-50 hover:bg-teal-500 "
        >
          Add Record
        </button>
      </form>
    </div>
  );
};
