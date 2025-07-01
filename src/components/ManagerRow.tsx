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
        <td className="p-3 border" rowSpan={2}>
          <p className="font-bold text-center text-[15px] text-blue-900">{admin.adminName}</p>
        </td>
        <td className="p-3 border">Income:</td>
        {monthIndices.map((i) => {
          const month = admin.months[i];

          if (!month) {
            return (
              <td
                key={`node-income-${admin.id}-${i}`}
                className="p-3 border"
                rowSpan={2}
                colSpan={2}
              >
                <p className="text-left text-gray-300 italic">No data</p>
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
        <td className="p-3 border" rowSpan={2}>
          <p className="text-center text-gray-500">...</p>
        </td>
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