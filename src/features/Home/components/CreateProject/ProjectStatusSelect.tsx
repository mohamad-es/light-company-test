import { Dispatch, SetStateAction } from "react";

type TProjectStatusSelect = {
  setStatus: Dispatch<SetStateAction<string>>;
  status: string;
};

const ProjectStatusSelect = ({ setStatus, status }: TProjectStatusSelect) => {
  return (
    <div>
      <label htmlFor="status" className="label mb-2 text-sm">
        <span className="label-text">Status</span>
      </label>
      <select
        id="status"
        className="select select-bordered w-full"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default ProjectStatusSelect;
