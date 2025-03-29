import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Employees from "./pages/Employees";
import employeesLoader from "./features/employees/loader";
import employeesAction from "./features/employees/action";
import authAction from "./features/authentication/action";
import NotFound from "./pages/NotFound";
import Authentication from "./pages/authentication";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/employees",
          element: <Employees />,
          loader: employeesLoader,
          action: employeesAction
        },
        {
          path: "/auth/:mode",
          element: <Authentication />,
          action: authAction,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
