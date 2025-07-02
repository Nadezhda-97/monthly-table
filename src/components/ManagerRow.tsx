import React from "react";
import type { AdminData } from "../types/api";

interface ManagerRowProps {
  admin: AdminData;
  monthIndices: number[];
  hoveredColIndex: number | null;
  setHoveredColIndex: (index: number | null) => void;
}

const ManagerRow = ({ admin, monthIndices, hoveredColIndex, setHoveredColIndex }: ManagerRowProps) => {
  return (
    <>
      <tr>
        <td className="p-3 border border-blue-200" rowSpan={2}>
          <p className="font-bold text-center text-[15px] text-blue-800">{admin.adminName}</p>
        </td>
        <td className="p-3 border border-blue-200">Income:</td>
        {monthIndices.map((i, index) => {
          const month = admin.months[i];

          if (!month) {
            return (
              <td
                key={`node-income-${admin.id}-${i}`}
                className="p-3 border border-blue-200"
                onMouseEnter={() => setHoveredColIndex(index)}
                onMouseLeave={() => setHoveredColIndex(null)}
                rowSpan={2}
                colSpan={2}
              >
                <p className="text-left text-gray-300 italic">No data</p>
              </td>
            );
          }
      
          return (
            <React.Fragment key={`row-${admin.id}-${i}`}>
              <td
                className="p-3 border border-blue-200 border-b-0 border-r-0 text-left bg-white"
                onMouseEnter={() => setHoveredColIndex(index)}
                onMouseLeave={() => setHoveredColIndex(null)}
              >
                <span className={`transition-colors duration-150 ${hoveredColIndex === index ? "text-black" : ""}`}>
                  $ {month.plan.income}
                </span>
              </td>
              <td
                className="p-3 border border-blue-200 border-b-0 border-l-0 text-left bg-white"
                onMouseEnter={() => setHoveredColIndex(index)}
                onMouseLeave={() => setHoveredColIndex(null)}
              >
                <span className={`transition-colors duration-150 ${hoveredColIndex === index ? "text-black" : ""}`}>
                  $ {month.fact.income}
                </span>
              </td>
            </React.Fragment>
          );
        })}
        <td className="p-3 border border-blue-200" rowSpan={2}>
          <p className="text-center text-gray-500">...</p>
        </td>
      </tr>
      <tr>
        <td className="p-3 border border-blue-200">Active partners:</td>
        {monthIndices.map((i, index) => {
          const month = admin.months[i];
      
          if (!month) {
            return null;
          }

          return (
            <React.Fragment key={`partners-${admin.id}-${i}`}>
              <td
                className="p-3 border border-blue-200 border-t-0 border-r-0 text-left bg-white"
                onMouseEnter={() => setHoveredColIndex(index)}
                onMouseLeave={() => setHoveredColIndex(null)}
              >
                <span className={`transition-colors duration-150 ${hoveredColIndex === index ? "text-black" : ""}`}>
                  {month.plan.activePartners}
                </span>
              </td>
              <td
                className="p-3 border border-blue-200 border-t-0 border-l-0 text-left bg-white"
                onMouseEnter={() => setHoveredColIndex(index)}
                onMouseLeave={() => setHoveredColIndex(null)}
              >
                <span className={`transition-colors duration-150 ${hoveredColIndex === index ? "text-black" : ""}`}>
                  {month.fact.activePartners}
                </span>
              </td>
            </React.Fragment>
          );
        })}
      </tr>
    </>
  );
};

export default ManagerRow;