import YearSelect from "./YearSelect";
import MonthNavigation from "./MonthNavigation";
import AddPlanButton from "./AddPlanButton";

interface TableControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const TableControls = ({ onPrev, onNext }: TableControlsProps) => {
  return (
    <div className="flex justify-between items-center mb-6 text-sm">
      <YearSelect />
      <div className="flex items-center gap-3">
        <MonthNavigation onPrev={onPrev} onNext={onNext} />
        <AddPlanButton />
      </div>
    </div>
  );
};

export default TableControls;