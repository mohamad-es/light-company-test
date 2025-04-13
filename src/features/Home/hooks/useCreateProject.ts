import { Dispatch, SetStateAction, useRef, useState } from "react";
import { TProject } from "../utils/types";

export const useCreateProject = (setProjects: Dispatch<SetStateAction<TProject[]>>) => {
  const [projectName, setProjectName] = useState<string>("Sample Project");
  const [description, setDescription] = useState<string>("This is a dummy project description.");
  const [startDate, setStartDate] = useState<string>("2024-01-01");
  const [endDate, setEndDate] = useState<string>("2024-06-30");
  const [status, setStatus] = useState<string>("In Progress"); 

  const modalsRef = useRef<HTMLDialogElement | null>(null);

  const handleCreateProject = () => {
    const newProject = {
      id: Date.now(), // Generate unique ID
      title: projectName,
      description,
      startDate,
      endDate,
      status,
    };

    // Save the project to localStorage
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");
    projects.push(newProject);
    localStorage.setItem("projects", JSON.stringify(projects));

    // Update the parent state
    setProjects((prevProjects) => [...prevProjects, newProject]);

    // Close the modal after saving
    modalsRef.current?.close();
  };

  return {
    modalsRef,
    handleCreateProject,
    projectName,
    setProjectName,
    setDescription,
    setStartDate,
    setEndDate,
    setStatus,
    endDate,
    startDate,
    description,
    status,
  };
};
