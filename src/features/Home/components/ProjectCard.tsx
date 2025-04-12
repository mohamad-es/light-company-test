
type Props = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
};

const ProjectCard = ({ title, description, startDate, endDate, status }: Props) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <span>Start: {startDate}</span>
          <span>End: {endDate}</span>
        </div>
        <div className="mt-2">
          <span className={`badge ${status === "Completed" ? "badge-success" : "badge-warning"}`}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
