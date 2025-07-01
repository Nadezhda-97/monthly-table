import { Plus } from "lucide-react";

const AddPlanButton = () => {
  return (
    <button className="flex items-center gap-2 bg-black hover:bg-gray-800 active:bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-all duration-200 cursor-pointer">
      <Plus size={16} />
      Add plan
    </button>
  );
};

export default AddPlanButton;