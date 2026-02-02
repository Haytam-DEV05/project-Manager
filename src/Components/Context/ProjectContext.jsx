import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [cartProjects, setCartProject] = useState([
    // {
    //   id: 1,
    //   titleProject: "hello",
    //   descriptionProject: "helkjdflkjdljk",
    //   tasks: [
    //     { id: 1, task: "make the architecture of the project", done: true },
    //     { id: 2, task: "complete the home components", done: false },
    //   ],
    // },
    // {
    //   id: 2,
    //   titleProject: "create a graet cv",
    //   descriptionProject: "in this project i will create a powerfol cv",
    //   tasks: [
    //     { id: 1, task: "make a cv", done: false },
    //     { id: 2, task: "complete the home components", done: true },
    //     { id: 3, task: "make the cv", done: false },
    //     { id: 4, task: "make the portfolio", done: false },
    //   ],
    // },
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
