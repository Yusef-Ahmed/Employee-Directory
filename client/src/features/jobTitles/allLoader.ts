import { LoaderFunction, redirect } from "react-router-dom";

export const loader : LoaderFunction = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/auth/login");
  }

  const response = await fetch("http://localhost:3000/jobTitle", {
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
