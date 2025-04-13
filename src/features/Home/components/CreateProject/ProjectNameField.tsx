import { Dispatch, SetStateAction } from "react";

type TProjectNameField = {
  projectName: string;
  setProjectName: Dispatch<SetStateAction<string>>;
};

const ProjectNameField = ({projectName,setProjectName}:TProjectNameField) => {
  return (
    <div>
      <label htmlFor="projectName" className="label mb-2 text-sm">
        <span className="label-text">Project Name</span>
      </label>
      <input
        type="text"
        id="projectName"
        className="input input-bordered w-full"
        placeholder="Enter project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
    </div>
  );
};

export default ProjectNameField;
