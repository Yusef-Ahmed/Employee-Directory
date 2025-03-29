import { ActionFunction, redirect } from "react-router-dom";

export const action: ActionFunction = async ({ request, params }) => {
  const mode = params.mode;
  const req = await request.formData();
  const data = {
    fullName: req.get("fullName"),
    email: req.get("email"),
    password: req.get("password"),
  };

  const response = await fetch("http://localhost:3000/" + mode, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) return resData;

  if (mode === "login") {
    localStorage.setItem("token", resData.token);
    return redirect("/employees");
  }

  return redirect("/auth/login");
};

export default action;
