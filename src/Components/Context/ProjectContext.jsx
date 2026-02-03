import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  
  const [cartProjects, setCartProject] = useState([
    {
      id: 1,
      titleProject: "create api",
      descriptionProject: "in this project i will create apowerfull api",
      tasks: [
        { id: 1, task: "make the structure of the project", done: true },
        { id: 2, task: "start in the routes and databases", done: false },
      ],
    },
    {
      id: 2,
      titleProject: "create a graet cv",
      descriptionProject: "in this project i will create a powerfol cv",
      tasks: [
        { id: 1, task: "make the structure of cv", done: false },
        { id: 2, task: "choice the color of the cv", done: true },
      ],
    },
  ]);

  const createProject = (data) => {
    setCartProject([...cartProjects, data]);
  };
  const createTasks = (id, task) => {
    console.log(id, task);
    console.log(cartProjects);

    setCartProject(
      cartProjects.map((p) => {
        if (p.id == id) {
          return { ...p, tasks: [...p.tasks, task] };
        } else {
          return p;
        }
      }),
    );
  };

  return (
    <ProjectContext.Provider
      value={{ createProject, cartProjects, createTasks }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
