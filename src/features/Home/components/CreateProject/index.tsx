// CreateProject.tsx
import { useCreateProject } from "../../hooks/useCreateProject";
import { TProject } from "../../utils/types";
import ProjectDescriptionField from "./ProjectDescriptionField";
import ProjectDueDate from "./ProjectDueDate";
import ProjectNameField from "./ProjectNameField";
import ProjectStatusSelect from "./ProjectStatusSelect";

interface CreateProjectProps {
  setProjects: React.Dispatch<React.SetStateAction<TProject[]>>;
}

const CreateProject: React.FC<CreateProjectProps> = ({ setProjects }) => {
  const {
    endDate,
    setEndDate,
    handleCreateProject,
    modalsRef,
    projectName,
    description,
    startDate,
    setProjectName,
    setDescription,
    setStartDate,
    setStatus,
    status,
  } = useCreateProject(setProjects);

  return (
    <>
      <button className="btn btn-primary rounded-xl" onClick={() => modalsRef.current?.showModal()}>
        Create New Project
      </button>

      <dialog ref={modalsRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create New Project</h3>

          <form className="space-y-4 mt-10">
            <ProjectNameField projectName={projectName} setProjectName={setProjectName} />

            <ProjectDescriptionField description={description} setDescription={setDescription} />

            <ProjectDueDate
              endDate={endDate}
              setEndDate={setEndDate}
              setStartDate={setStartDate}
              startDate={startDate}
            />

            <ProjectStatusSelect status={status} setStatus={setStatus} />

            <div className="modal-action">
              <button className="btn" onClick={() => modalsRef.current?.close()}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleCreateProject}>
                Create Project
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default CreateProject;
