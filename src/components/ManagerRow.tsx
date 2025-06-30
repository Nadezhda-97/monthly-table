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
        <td className="p-2 border" rowSpan={2}>{admin.adminName}</td>
        <td className="p-2 border">Income</td>
        {monthIndices.map((i) => {
          const month = admin.months[i];
          const planIncome = month?.plan?.income ?? "No data";
          const factIncome = month?.fact?.income ?? "No data";
      
          return (
            <React.Fragment key={`row-${admin.id}-${i}`}>
              <td className="p-2 border text-right">{`$ ${planIncome}`}</td>
              <td className="p-2 border text-right">{`$ ${factIncome}`}</td>
            </React.Fragment>
          );
        })}
      </tr>
      <tr>
        <td className="p-2 border">Active partners</td>
        {monthIndices.map((i) => {
          const month = admin.months[i];
          const planPartners = month?.plan?.activePartners ?? "No data";
          const factPartners = month?.fact?.activePartners ?? "No data";
      
          return (
            <React.Fragment key={`partners-${admin.id}-${i}`}>
              <td className="p-2 border text-right">{planPartners}</td>
              <td className="p-2 border text-right">{factPartners}</td>
            </React.Fragment>
          );
        })}
      </tr>
    </>
  );
};

export default ManagerRow;