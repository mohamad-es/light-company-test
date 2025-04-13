type Props = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
};

const ProjectCard = ({ title, description, startDate, endDate, status }: Props) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <span>Start: {startDate}</span>
          <span>End: {endDate}</span>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <span
            className={`w-3 h-3 rounded-full block ${status === "Completed" ? "bg-green-600" : "bg-yellow-500"}`}
          ></span>
          <span className={`badge secondary-bg-color text-white`}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
