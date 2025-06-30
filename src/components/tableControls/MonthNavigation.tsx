import { ChevronLeft, ChevronRight } from "lucide-react";

interface MonthNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

const MonthNavigation = ({ onPrev, onNext }: MonthNavigationProps) => {
  return (
    <>
      <button
        className="p-2 border rounded hover:bg-gray-100"
        aria-label="Previous month"
        onClick={onPrev}
      >
        <ChevronLeft size={16} />
      </button>
      <button
        className="p-2 border rounded hover:bg-gray-100"
        aria-label="Next month"
        onClick={onNext}
      >
        <ChevronRight size={16} />
      </button>
    </>
  );
};

export default MonthNavigation;