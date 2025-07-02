import React from "react";
import type { TotalItem } from "../types/api";

interface TotalRowProps {
  total: TotalItem[];
  monthIndices: number[];
  hoveredColIndex: number | null;
  setHoveredColIndex: (index: number | null) => void;
}

const TotalRow = ({ total, monthIndices, hoveredColIndex, setHoveredColIndex }: TotalRowProps) => {
  return (
    <>
      <tr className="bg-gray-50 font-medium text-sm text-blue-300">
        <td className="p-3 border border-blue-200" rowSpan={2}>Manager</td>
        <td className="p-3 border border-blue-200">Total income:</td>
        {monthIndices.map((i, index) => {
          const item = total[i];
          return (
            <React.Fragment key={`total-income-${i}`}>
              <td
                className="p-3 border border-blue-200 border-b-0 border-r-0 text-left"
                onMouseEnter={() => setHoveredColIndex(index)}
                onMouseLeave={() => setHoveredColIndex(null)}
              >
                <span className={`transition-colors duration-150 ${hoveredColIndex === index ? "text-black" : ""}`}>
                  {item?.plan ? `$ ${item.plan.income}` : "No data"}
                </span>
              </td>
              <td
                className="p-3 border border-blue-200 border-b-0 border-l-0 text-left"
                onMouseEnter={() => setHoveredColIndex(index)}
                onMouseLeave={() => setHoveredColIndex(null)}
              >
                <span className={`transition-colors duration-150 ${hoveredColIndex === index ? "text-black" : ""}`}>
                  {item?.fact ? `$ ${item.fact.income}` : "No data"}
                </span>
              </td>
            </React.Fragment>
          );
        })}
        <td className="p-3 border border-blue-200 bg-gray-50" rowSpan={2}></td>
      </tr>
      <tr className="bg-gray-50 font-medium text-sm text-blue-300">
        <td className="p-3 border border-blue-200">Total active partners:</td>
        {monthIndices.map((i, index) => {
          const item = total[i];
          return (
            <React.Fragment key={`total-partners-${i}`}>
              <td
                className="p-3 border border-blue-200 border-t-0 border-r-0 text-left"
                onMouseEnter={() => setHoveredColIndex(index)}
                onMouseLeave={() => setHoveredColIndex(null)}
              >
                <span className={`transition-colors duration-150 ${hoveredColIndex === index ? "text-black" : ""}`}>
                  {item?.plan ? item.plan.activePartners : "No data"}
                </span>
              </td>
              <td
                className="p-3 border border-blue-200 border-t-0 border-l-0 text-left"
                onMouseEnter={() => setHoveredColIndex(index)}
                onMouseLeave={() => setHoveredColIndex(null)}
              >
                <span className={`transition-colors duration-150 ${hoveredColIndex === index ? "text-black" : ""}`}>
                  {item?.fact ? item.fact.activePartners : "No data"}
                </span>
              </td>
            </React.Fragment>
          );
        })}
      </tr>
    </>
  );
};

export default TotalRow;