type Props = {
  handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filterStatus: string;
};

const FilterProject = ({ handleFilterChange, filterStatus }: Props) => {
  return (
    <select className="select select-bordered w-1/4" value={filterStatus} onChange={handleFilterChange}>
      <option value="">All Statuses</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default FilterProject;
