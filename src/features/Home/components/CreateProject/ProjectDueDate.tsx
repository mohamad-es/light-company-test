import { Dispatch, SetStateAction } from "react";

type TProjectDueDate = {
  startDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
  endDate: string;
  setEndDate: Dispatch<SetStateAction<string>>;
};

const ProjectDueDate = ({ setStartDate, startDate, endDate, setEndDate }: TProjectDueDate) => {
  return (
    <div className="flex space-x-4">
      <div className="flex-1">
        <label htmlFor="startDate" className="label mb-2 text-sm">
          <span className="label-text">Start Date</span>
        </label>
        <input
          type="date"
          id="startDate"
          className="input input-bordered w-full"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="flex-1">
        <label htmlFor="endDate" className="label mb-2 text-sm">
          <span className="label-text">End Date</span>
        </label>
        <input
          type="date"
          id="endDate"
          className="input input-bordered w-full"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProjectDueDate;
