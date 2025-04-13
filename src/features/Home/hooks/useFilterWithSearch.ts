import { useState, useEffect } from "react";
import { TProject } from "../utils/types";

export const useFilterWithSearch = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filterStatus, setFilterStatus] = useState(""); 
  const [projects, setProjects] = useState<TProject[]>([]); 

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

  return { handleFilterChange, filteredProjects, handleSearchChange, setProjects, searchTerm, filterStatus };
};
