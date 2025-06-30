import { Plus } from "lucide-react";

const AddPlanButton = () => {
  return (
    <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
      <Plus size={16} />
      Add plan
    </button>
  );
};

export default AddPlanButton;