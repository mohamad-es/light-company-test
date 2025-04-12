// HomePage.tsx
import { useState, useEffect } from "react";
import CreateProject from "./components/CreateProject";
import ProjectCard from "./components/ProjectCard";
import { TProject } from "./types";
import FilterProject from "./components/FilterProject";
import SearchProject from "./components/SearchProject";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search
  const [filterStatus, setFilterStatus] = useState(""); // State for filter
  const [projects, setProjects] = useState<TProject[]>([]); // State for projects

  // Fetch projects from localStorage on mount
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    setProjects(storedProjects);
  }, []);

  // Handle search term change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
  };

  // Filter projects based on search and filter criteria
  const filteredProjects = projects.filter((project) => {
    const title = project?.title?.toLowerCase() || "";
    const description = project?.description?.toLowerCase() || "";
    const matchesSearch = title.includes(searchTerm.toLowerCase()) || description.includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "" || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

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
