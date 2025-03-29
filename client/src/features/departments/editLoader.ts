import { LoaderFunction, redirect } from "react-router-dom";

export const loader: LoaderFunction = async ({ params }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/auth/login");
  }

  const response = await fetch("http://localhost:3000/department/" + params.id, {
    headers: {
      Authorization: token,
    },
  });

  if (!response.ok) {
    localStorage.removeItem("token");
    return redirect("/auth/login");
  }

  const resData = await response.json();

  return resData;
};

export default loader;
