import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [cartProjects, setCartProject] = useState([
    {
      id: 1,
      titleProject: "hello",
      descriptionProject: "helkjdflkjdljk",
      done: 0,
      tasks: 0,
    },
    {
      id: 2,
      titleProject: "monomom",
      descriptionProject: "helkjdflkjdlwkjdfldjljk",
      done: 0,
      tasks: 0,
    },
    {
      id: 3,
      titleProject: "bonnoo",
      descriptionProject: "helkjdflk;lqkfljk ladkfjkljd jdljk",
      done: 0,
      tasks: 0,
    },
    {
      id: 4,
      titleProject: "holla",
      descriptionProject: "helkjdflkfj dlafkjlad fkladfj o;lkllkjdljk",
      done: 0,
      tasks: 0,
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
