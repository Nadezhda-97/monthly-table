import YearSelect from "./YearSelect";
import MonthNavigation from "./MonthNavigation";
import AddPlanButton from "./AddPlanButton";

interface TableControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const TableControls = ({ onPrev, onNext }: TableControlsProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <YearSelect />
      </div>
      <div className="flex items-center gap-2">
        <MonthNavigation onPrev={onPrev} onNext={onNext} />
        <AddPlanButton />
      </div>
    </div>
  );
};

export default TableControls;