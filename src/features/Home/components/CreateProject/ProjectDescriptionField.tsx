import { Dispatch, SetStateAction } from "react";

type TProjectDescriptionField = {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
};

const ProjectDescriptionField = ({ description, setDescription }: TProjectDescriptionField) => {
  return (
    <div>
      <label htmlFor="description" className="label mb-2 text-sm">
        <span className="label-text">Description</span>
      </label>
      <textarea
        id="description"
        className="textarea textarea-bordered w-full"
        placeholder="Enter project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default ProjectDescriptionField;
