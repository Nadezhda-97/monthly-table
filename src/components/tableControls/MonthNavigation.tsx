import { ChevronLeft, ChevronRight } from "lucide-react";

interface MonthNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

const MonthNavigation = ({ onPrev, onNext }: MonthNavigationProps) => {
  const baseClass =
    "p-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 cursor-pointer";

  return (
    <>
      <button className={baseClass} aria-label="Previous month" onClick={onPrev}>
        <ChevronLeft size={16} />
      </button>
      <button className={baseClass} aria-label="Next month" onClick={onNext}>
        <ChevronRight size={16} />
      </button>
    </>
  );
};

export default MonthNavigation;