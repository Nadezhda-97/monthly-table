import React from "react";
import type { AdminData } from "../types/api";

interface ManagerRowProps {
  admin: AdminData;
  monthIndices: number[];
}

const ManagerRow = ({ admin, monthIndices }: ManagerRowProps) => {
  return (
    <>
      <tr>
        <td className="p-3 border font-bold text-center text-[15px] text-blue-900" rowSpan={2}>{admin.adminName}</td>
        <td className="p-3 border">Income:</td>
        {monthIndices.map((i) => {
          const month = admin.months[i];

          if (!month) {
            return (
              <td
                key={`node-income-${admin.id}-${i}`}
                className="p-3 border text-left text-gray-500 italic bg-gray-50"
                rowSpan={2}
                colSpan={2}
              >
                No data
              </td>
            );
          }
      
          return (
            <React.Fragment key={`row-${admin.id}-${i}`}>
              <td className="p-3 border border-b-0 border-r-0 text-left bg-white">{`$ ${month.plan.income}`}</td>
              <td className="p-3 border border-b-0 border-l-0 text-left bg-white">{`$ ${month.fact.income}`}</td>
            </React.Fragment>
          );
        })}
      </tr>
      <tr>
        <td className="p-3 border">Active partners:</td>
        {monthIndices.map((i) => {
          const month = admin.months[i];
      
          if (!month) {
            return null;
          }

          return (
            <React.Fragment key={`partners-${admin.id}-${i}`}>
              <td className="p-3 border border-t-0 border-r-0 text-left bg-white">{month.plan.activePartners}</td>
              <td className="p-3 border border-t-0 border-l-0 text-left bg-white">{month.fact.activePartners}</td>
            </React.Fragment>
          );
        })}
      </tr>
    </>
  );
};

export default ManagerRow;