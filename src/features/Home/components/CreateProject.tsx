// CreateProject.tsx
import { useCreateProject } from "../hooks/useCreateProject";
import { TProject } from "../types";

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
      <button className="btn btn-primary" onClick={() => modalsRef.current?.showModal()}>
        Create New Project
      </button>

      <dialog ref={modalsRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create New Project</h3>

          <form className="space-y-4 mt-10">
            <div>
              <label htmlFor="projectName" className="label">
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

            <div>
              <label htmlFor="description" className="label">
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

            <div>
              <label htmlFor="status" className="label">
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
