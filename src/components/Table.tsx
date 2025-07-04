import { useState, useEffect } from "react";
import fetchData from "../lib/fetchData";
import { months } from "../lib/months";
import type { AdminData, TotalItem } from "../types/api";

import Header from "./Header";
import TotalRow from "./TotalRow";
import ManagerRow from "./ManagerRow";
import TableControls from "./tableControls/TableControls";

const Table = () => {
  const [admins, setAdmins] = useState<AdminData[]>([]);
  const [total, setTotal] = useState<TotalItem[]>([]);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [hoveredColIndex, setHoveredColIndex] = useState<number | null>(null);

  const currentMonthIndex = new Date().getMonth();
  const [startMonthIndex, setStartMonthIndex] = useState(currentMonthIndex);

  const visibleMonthIndices = Array.from({ length: 6 }, (_, i) =>
    (startMonthIndex + i) % 12
  );

  const visibleMonths = visibleMonthIndices.map((i) => months[i]);

  const handleNext = () => {
    setStartMonthIndex((prev) => (prev + 1) % 12);
  };

  const handlePrev = () => {
    setStartMonthIndex((prev) => (prev - 1 + 12) % 12);
  };

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
      <TableControls onNext={handleNext} onPrev={handlePrev} />
      <div className="overflow-x-auto border border-blue-200 rounded-md">
        <table className="min-w-[900px] w-full border-collapse text-sm text-left text-blue-300 shadow-sm rounded-md overflow-hidden">
          <Header
            months={visibleMonths}
            hoveredColIndex={hoveredColIndex}
            setHoveredColIndex={setHoveredColIndex}
          />
          <tbody>
            <TotalRow
              total={total}
              monthIndices={visibleMonthIndices}
              hoveredColIndex={hoveredColIndex}
              setHoveredColIndex={setHoveredColIndex}
            />
            {admins.map((admin) => (
              <ManagerRow
                key={admin.id}
                admin={admin}
                monthIndices={visibleMonthIndices}
                hoveredColIndex={hoveredColIndex}
                setHoveredColIndex={setHoveredColIndex}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;