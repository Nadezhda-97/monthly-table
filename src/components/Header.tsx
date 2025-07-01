import React from "react";

interface HeaderProps {
  months: string[];
}

const Header = ({ months }: HeaderProps) => {
  return (
    <thead className="bg-blue-50 text-[13px] tracking-wide text-blue-300">
      <tr>
        <th className="p-3 border font-medium text-center" rowSpan={2}></th>
        <th className="p-3 border font-medium text-center" rowSpan={2}></th>
        {months.map((month) => (
          <th className="p-3 border border-b-0 font-semibold text-left text-[16px]" colSpan={2} key={month}>
            {month}
          </th>
        ))}
        <th className="p-3 border font-medium text-center" rowSpan={2}></th>
      </tr>
      <tr>
        {months.map((_, index) => (
          <React.Fragment key={index}>
            <th className="p-3 border border-t-0 border-r-0">
              <p className="font-medium text-left text-gray-300">Plan:</p>
            </th>
            <th className="p-3 border border-t-0 border-l-0">
              <p className="font-medium text-left text-gray-300">Fact:</p>
            </th>
          </React.Fragment>
        ))}
      </tr>
    </thead>
  );
};

export default Header;