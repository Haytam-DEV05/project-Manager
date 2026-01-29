import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "../../Pages/Home";
import ProjectDetaille from "../../Pages/ProjectDetaille";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  const Linkes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Projects/:id", element: <ProjectDetaille /> },
      ],
    },
  ]);
  function Layout() {
    return (
      <>
        <Navbar />
        <>
          <Outlet />
        </>
      </>
    );
  }
  return <RouterProvider router={Linkes}></RouterProvider>;
}
