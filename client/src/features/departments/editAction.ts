import { ActionFunction, redirect } from "react-router-dom";

export const action: ActionFunction = async ({ request }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/auth/login");
  }

  const req = await request.formData();
  const data = {
    id: req.get("id"),
    name: req.get("name"),
  };

  const response = await fetch("http://localhost:3000/department", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) return resData;

  return redirect("/departments");
};

export default action;
