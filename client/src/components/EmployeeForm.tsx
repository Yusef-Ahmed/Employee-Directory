import { useEffect, useState } from "react";
import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import Notification from "./Notification";

function EmployeeForm({ title }: { title: string }) {
  const [error, setError] = useState<string>("");
  const data = useLoaderData();
  const errorData = useActionData();

  useEffect(() => {
    if (errorData && errorData.ErrorData) setError(errorData.ErrorData[0]);
    else if (errorData && errorData.message) setError(errorData.message);
    else setError("");
  }, [errorData]);

  return (
    <div className="flex flex-col items-center gap-8 justify-center my-5">
      {/* error section */}
      {error && <Notification status={409} message={error} />}

      <Link to={"/"}>
        <img
          className="w-20 mt-4 transition-all duration-300 hover:scale-125 hover:-translate-y-5"
          src="https://5d.ae/themes/mysite/assets/img/5D-white.svg"
        />
      </Link>
      <Form className="flex flex-col gap-3" method="POST">
        <h1 className="text-3xl mb-5 text-center">{title}</h1>

        <input hidden defaultValue={data?.employee?.id} name="id" />

        <section className="flex flex-col gap-1">
          <label className="ml-0.5">Full Name</label>
          <input
            placeholder="Full Name"
            className="transition border p-2 rounded-md focus:-translate-y-1"
            name="fullName"
            type="text"
            defaultValue={data?.employee?.fullName}
          />
        </section>

        <section className="flex flex-col gap-1">
          <label className="ml-0.5">Email address</label>
          <input
            placeholder="Email"
            className="transition border p-2 rounded-md focus:-translate-y-1"
            name="email"
            type="email"
            defaultValue={data?.employee?.email}
          />
        </section>

        <section className="flex flex-col gap-1">
          <label className="ml-0.5">Phone Number</label>
          <input
            placeholder="Phone Number"
            className="transition border p-2 rounded-md focus:-translate-y-1"
            name="phoneNumber"
            type="tel"
            defaultValue={data?.employee?.phoneNumber}
          />
        </section>

        <section className="flex flex-col gap-1">
          <label className="ml-0.5">Status</label>
          <select
            name="status"
            className="border p-2 rounded-md"
            defaultValue={data?.employee?.status.toString()}
          >
            <option className=" bg-gray-900" value="true">
              Active
            </option>
            <option className=" bg-gray-900" value="false">
              Inactive
            </option>
          </select>
        </section>

        <section className="flex flex-col gap-1">
          <label className="ml-0.5">Department ID</label>
          <input
            placeholder="Department ID"
            className="transition border p-2 rounded-md focus:-translate-y-1"
            name="departmentId"
            type="number"
            defaultValue={data?.employee?.departmentId}
          />
        </section>

        <section className="flex flex-col gap-1">
          <label className="ml-0.5">Job Title ID</label>
          <input
            placeholder="Job Title ID"
            className="transition border p-2 rounded-md focus:-translate-y-1"
            name="jobTitleId"
            type="number"
            defaultValue={data?.employee?.jobTitleId}
          />
        </section>

        <button className="transition rounded-md bg-indigo-600 py-1.5 text-white hover:cursor-pointer hover:bg-indigo-500 hover:-translate-y-1">
          Save
        </button>
      </Form>
    </div>
  );
}

export default EmployeeForm;
