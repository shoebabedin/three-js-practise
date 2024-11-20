import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Hawkeye from "./components/Hawkeye";
import Layout from "./components/Layout";
import Dance from "./pages/Dance";
import Earth from "./pages/Earth";
import Home from "./pages/home";
import HumanBody from "./pages/HumanBody";
import Resturant from "./pages/Resturant";
import TopChair from "./pages/TopChair";
import ControllingModel from "./pages/ControllingModel";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/earth",
          element: <Earth />
        },
        {
          path: "/top-chair",
          element: <TopChair />
        },
        {
          path: "/resturant",
          element: <Resturant />
        },
        {
          path: "/dance",
          element: <Dance />
        },
        {
          path: "/human-body",
          element: <HumanBody />
        },
        {
          path: "/hawkeye",
          element: <Hawkeye />
        },
        {
          path: "/controlling-model",
          element: <ControllingModel />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
