import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [cartProjects, setCartProject] = useState([
    {
      id: 1,
      titleProject: "hello",
      descriptionProject: "helkjdflkjdljk",
      tasks: [
        { id: 1, task: "make the architecture of the project" },
        { id: 2, task: "complete the home components" },
      ],
      done: [{ id: 1 }],
    },
    {
      id: 2,
      titleProject: "monomom",
      descriptionProject: "helkjdflkjdlwkjdfldjljk",
      tasks: [
        { id: 1, task: "make a cv" },
        { id: 2, task: "complete the home components" },
        { id: 3, task: "make the cv" },
        { id: 4, task: "make the portfolio" },
      ],
      done: [{ id: 1 }, { id: 3 }],
    },
  ]);
  const createProject = (data) => {
    setCartProject([...cartProjects, data]);
  };
  //   const totalTodo = () => {};
  //   const totalInProgresse = () => {};
  //   const totalComplete = () => {};

  return (
    <ProjectContext.Provider value={{ createProject, cartProjects }}>
      {children}
    </ProjectContext.Provider>
  );
}
