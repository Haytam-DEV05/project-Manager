import Navbar from "./Components/Templates/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import { ProjectProvider } from "./Components/Context/ProjectContext";

export default function App() {
  return (
    <>
      <Navbar />
      <ProjectProvider>
        <Home />
      </ProjectProvider>
    </>
  );
}
