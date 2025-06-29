import React from "react";
import type { TotalItem } from "../types/api";

interface TotalItemProps {
  total: TotalItem[];
}

const TotalRow = ({ total }: TotalItemProps) => {
  return (
    <>
      <tr className="bg-gray-50">
        <td className="p-2 border" rowSpan={2}>Manager</td>
        <td className="p-2 border">Total income:</td>
        {total.map((item, index) => (
          <React.Fragment key={`total-income-${index}`}>
            <td className="p-2 border text-right">{`$ ${item.plan.income}`}</td>
            <td className="p-2 border text-right">{`$ ${item.fact.income}`}</td>
          </React.Fragment>
        ))}
      </tr>
      <tr className="bg-gray-50">
        <td className="p-2 border">Total active partners:</td>
        {total.map((item, index) => (
          <React.Fragment key={`total-partners-${index}`}>
            <td className="p-2 border text-right">{item.plan.activePartners}</td>
            <td className="p-2 border text-right">{item.fact.activePartners}</td>
          </React.Fragment>
        ))}
      </tr>
    </>
  );
};

export default TotalRow;