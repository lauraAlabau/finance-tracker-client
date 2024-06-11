/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUser } from "@clerk/clerk-react";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface FinanceRecord {
  _id?: string;
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  payment: string;
}

interface FinanceContextType {
  records: FinanceRecord[];
  addRecord: (record: FinanceRecord) => void;
  updateRecord: (id: string, newRecord: FinanceRecord) => void;
  deleteRecord: (id: string) => void;
}

// const BASE_URL = "http://localhost:3000/";
const BASE_URL = "https://finance-tracker-srv.vercel.app/";

export const FinanceContext = createContext<FinanceContextType | undefined>(
  undefined
);

export const FinanceProvider = ({ children }: { children: ReactNode }) => {
  const [records, setRecords] = useState<FinanceRecord[]>([]);
  const { user } = useUser();

  const fetchRecords = async () => {
    if (!user) return;

    const response = await fetch(
      `${BASE_URL}finances-record/getAllByUserID/${user?.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response.ok) {
      const records = await response.json();
      setRecords(records);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [user]);

  const addRecord = async (record: FinanceRecord) => {
    const response = await fetch(`${BASE_URL}finances-record`, {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) => [...prev, newRecord]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateRecord = async (id: string, newRecord: FinanceRecord) => {
    const response = await fetch(`${BASE_URL}finances-record/${id}`, {
      method: "PUT",
      body: JSON.stringify(newRecord),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) =>
          prev.map((record) => {
            if (record._id === id) {
              return newRecord;
            } else {
              return record;
            }
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = async (id: string) => {
    const response = await fetch(`${BASE_URL}finances-record/${id}`, {
      method: "DELETE",
    });

    try {
      if (response.ok) {
        const deletedRecord = await response.json();
        setRecords((prev) =>
          prev.filter((record) => record._id !== deletedRecord._id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FinanceContext.Provider
      value={{ records, addRecord, updateRecord, deleteRecord }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFinanceContext = () => {
  const context = useContext<FinanceContextType | undefined>(FinanceContext);

  if (!context) {
    throw new Error("useFinanceContext must be use within a FinanceProvider");
  }

  return context;
};
