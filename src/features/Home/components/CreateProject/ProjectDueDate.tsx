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
      <div>
        <label htmlFor="startDate" className="label">
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

      <div>
        <label htmlFor="endDate" className="label">
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
