import React from "react";

interface HeaderProps {
  months: string[];
  hoveredColIndex: number | null;
  setHoveredColIndex: (index: number | null) => void;
}

const Header = ({ months, hoveredColIndex, setHoveredColIndex }: HeaderProps) => {
  return (
    <thead className="bg-blue-50 text-[13px] tracking-wide text-blue-300">
      <tr>
        <th className="p-3 border border-blue-200 font-medium text-center" rowSpan={2}></th>
        <th className="p-3 border border-blue-200 font-medium text-center" rowSpan={2}></th>
        {months.map((month, index) => (
          <th
            className="p-3 border border-blue-200 border-b-0 font-semibold text-left text-[16px]"
            onMouseEnter={() => setHoveredColIndex(index)}
            onMouseLeave={() => setHoveredColIndex(null)}
            colSpan={2}
            key={month}
          >
            <p className={`transition-colors duration-150 ${hoveredColIndex === index ? "text-blue-500" : ""}`}>
              {month}
            </p>
          </th>
        ))}
        <th className="p-3 border border-blue-200 font-medium text-center" rowSpan={2}></th>
      </tr>
      <tr>
        {months.map((_, index) => (
          <React.Fragment key={index}>
            <th
              className="p-3 border border-blue-200 border-t-0 border-r-0"
              onMouseEnter={() => setHoveredColIndex(index)}
              onMouseLeave={() => setHoveredColIndex(null)}
            >
              <p className={`transition-colors duration-150 font-medium text-left ${hoveredColIndex === index ? "text-gray-500" : "text-gray-300"}`}>
                Plan:
              </p>
            </th>
            <th
              className="p-3 border border-blue-200 border-t-0 border-l-0"
              onMouseEnter={() => setHoveredColIndex(index)}
              onMouseLeave={() => setHoveredColIndex(null)}
            >
              <p className={` transition-colors duration-150 font-medium text-left ${hoveredColIndex === index ? "text-gray-500" : "text-gray-300"}`}>
                Fact:
              </p>
            </th>
          </React.Fragment>
        ))}
      </tr>
    </thead>
  );
};

export default Header;