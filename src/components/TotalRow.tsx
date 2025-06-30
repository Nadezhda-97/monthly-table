import React from "react";
import type { TotalItem } from "../types/api";

interface TotalRowProps {
  total: TotalItem[];
  monthIndices: number[];
}

const TotalRow = ({ total, monthIndices }: TotalRowProps) => {
  return (
    <>
      <tr className="bg-gray-50">
        <td className="p-2 border" rowSpan={2}>Manager</td>
        <td className="p-2 border">Total income:</td>
        {monthIndices.map((i) => {
          const item = total[i];
          return (
            <React.Fragment key={`total-income-${i}`}>
              <td className="p-2 border text-right">
                {item?.plan ? `$ ${item.plan.income}` : "No data"}
              </td>
              <td className="p-2 border text-right">
                {item?.fact ? `$ ${item.fact.income}` : "No data"}
              </td>
            </React.Fragment>
          );
        })}
      </tr>
      <tr className="bg-gray-50">
        <td className="p-2 border">Total active partners:</td>
        {monthIndices.map((i) => {
          const item = total[i];
          return (
            <React.Fragment key={`total-partners-${i}`}>
              <td className="p-2 border text-right">
                {item?.plan ? item.plan.activePartners : "No data"}
              </td>
              <td className="p-2 border text-right">
                {item?.fact ? item.fact.activePartners : "No data"}
              </td>
            </React.Fragment>
          );
        })}
      </tr>
    </>
  );
};

export default TotalRow;