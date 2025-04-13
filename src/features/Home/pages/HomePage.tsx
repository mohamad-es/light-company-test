import CreateProject from "../components/CreateProject";
import FilterProject from "../components/FilterProject";
import ProjectCard from "../components/ProjectCard";
import SearchProject from "../components/SearchProject";
import { useFilterWithSearch } from "../hooks/useFilterWithSearch";

const HomePage = () => {
  const { filteredProjects, handleFilterChange, handleSearchChange, searchTerm, filterStatus, setProjects } =
    useFilterWithSearch();

  return (
    <div>
      <div className="flex items-center justify-between ps-10 pt-10">
        <h1 className="text-3xl">Project List</h1>
        {/* Pass setProjects to CreateProject */}
        <CreateProject setProjects={setProjects} />
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-6 p-6">
        <SearchProject handleSearchChange={handleSearchChange} searchTerm={searchTerm} />

        {/* Filter */}
        <FilterProject filterStatus={filterStatus} handleFilterChange={handleFilterChange} />
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredProjects.length === 0
          ? "No Project found."
          : filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                startDate={project.startDate}
                endDate={project.endDate}
                status={project.status}
              />
            ))}
      </div>
    </div>
  );
};

export default HomePage;
