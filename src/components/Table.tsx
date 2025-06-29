import { useState, useEffect } from "react";
import fetchData from "../lib/fetchData";
import type { AdminData, TotalItem } from "../types/api";

import Header from "./Header";
import TotalRow from "./TotalRow";
import ManagerRow from "./ManagerRow";

const Table = () => {
  const [admins, setAdmins] = useState<AdminData[]>([]);
  const [total, setTotal] = useState<TotalItem[]>([]);
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const { data } = await fetchData();
        setAdmins(data.table);
        setTotal(data.total);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Загрузка данных...</p>;

  return (
    <div className="p-4">
      <div className="overflow-x-auto border rounded-md">
        <table className="min-w-[900px] table-auto border-collapse w-full text-sm text-left">
          <Header />
          <tbody>
            <TotalRow total={total} />
            {admins.map((admin) => (
              <ManagerRow key={admin.id} admin={admin} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;