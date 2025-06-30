import React from "react";

interface HeaderProps {
  months: string[];
}

const Header = ({ months }: HeaderProps) => {
  return (
    <thead className="bg-gray-100">
      <tr>
        <th className="p-2 border" rowSpan={2}></th>
        <th className="p-2 border" rowSpan={2}></th>
        {months.map((month) => (
          <th className="p-2 border text-center" colSpan={2} key={month}>
            {month}
          </th>
        ))}
      </tr>
      <tr>
        {months.map((_, index) => (
          <React.Fragment key={index}>
            <th className="p-2 border text-center">Plan</th>
            <th className="p-2 border text-center">Fact</th>
          </React.Fragment>
        ))}
      </tr>
    </thead>
  );
};

export default Header;