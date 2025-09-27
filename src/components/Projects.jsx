import React from "react";
import { projects } from "../constants/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="my-5">
        <div className="text-center"><h1 className="text-5xl font-bold my-5">My Projects</h1></div>
    <div className=" min-h-[60vh] max-w-6xl mx-auto my-5 grid grid-cols-3 gap-2">
      {projects.map((project) => (
        <ProjectCard project={project}/>
      ))}
    </div>
    </div>
  );
};

export default Projects;
