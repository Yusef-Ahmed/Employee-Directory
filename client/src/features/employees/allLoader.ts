import { LoaderFunction, redirect } from "react-router-dom";

export const loader: LoaderFunction = async ({ request }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/auth/login");
  }

  const searchParams = new URL(request.url).searchParams;
  let params = "";
  searchParams.forEach((value, key) => (params += key + "=" + value + "&"));
  params = params.substring(0, params.length - 1);

  const response = await fetch(("http://localhost:3000/employees?" + params), {
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
