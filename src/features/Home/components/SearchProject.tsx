type TSearchProject = {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchProject = ({ handleSearchChange, searchTerm }: TSearchProject) => {
  return (
    <input
      type="text"
      placeholder="Search by title or description"
      className="input input-bordered w-1/2"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchProject;
