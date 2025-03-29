import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Employees from "./pages/employees/Employees";
import employeesLoader from "./features/employees/allLoader";
import employeesAction from "./features/employees/deleteAction";
import departmentsAction from "./features/departments/deleteAction";
import jobTitlesAction from "./features/jobTitles/deleteAction";
import authAction from "./features/authentication/action";
import NotFound from "./pages/NotFound";
import Authentication from "./pages/Authentication";
import EditEmployee from "./pages/employees/EditEmployee";
import editEmployeeLoader from "./features/employees/editLoader";
import editDepartmentLoader from "./features/departments/editLoader";
import editJobTitleLoader from "./features/jobTitles/editLoader";
import departmentsLoader from "./features/departments/allLoader";
import jobTitlesLoader from "./features/jobTitles/allLoader";
import editEmployeeAction from "./features/employees/editAction";
import editDepartmentAction from "./features/departments/editAction";
import editJobTitleAction from "./features/jobTitles/editAction";
import addEmployeeAction from "./features/employees/addAction";
import addDepartmentAction from "./features/departments/addAction";
import addJobTitleAction from "./features/jobTitles/addAction";
import AddEmployee from "./pages/employees/AddEmployee";
import Department from "./pages/departments/Departments";
import JobTitle from "./pages/jobTitles/JobTitles";
import AddDepartment from "./pages/departments/AddDepartment";
import AddJobTitle from "./pages/jobTitles/AddJobTitle";
import EditDepartment from "./pages/departments/EditDepartment";
import EditJobTitle from "./pages/jobTitles/EditJobTitle";

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
          children: [
            {
              index: true,
              element: <Employees />,
              loader: employeesLoader,
              action: employeesAction,
            },
            {
              path: ":id",
              element: <EditEmployee />,
              loader: editEmployeeLoader,
              action: editEmployeeAction,
            },
            {
              path: "add",
              element: <AddEmployee />,
              action: addEmployeeAction,
            },
          ],
        },
        {
          path: "/departments",
          children: [
            {
              index: true,
              element: <Department />,
              loader: departmentsLoader,
              action: departmentsAction,
            },
            {
              path: ":id",
              element: <EditDepartment />,
              loader: editDepartmentLoader,
              action: editDepartmentAction,
            },
            {
              path: "add",
              element: <AddDepartment />,
              action: addDepartmentAction,
            },
          ],
        },
        {
          path: "/jobTitles",
          children: [
            {
              index: true,
              element: <JobTitle />,
              loader: jobTitlesLoader,
              action: jobTitlesAction,
            },
            {
              path: ":id",
              element: <EditJobTitle />,
              loader: editJobTitleLoader,
              action: editJobTitleAction,
            },
            {
              path: "add",
              element: <AddJobTitle />,
              action: addJobTitleAction,
            },
          ],
        },
        {
          path: "/auth/:mode",
          element: <Authentication />,
          action: authAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
