import { useEffect, useState } from "react";
import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import Notification from "./Notification";

function GeneralForm({ title }: { title: string }) {
  const [error, setError] = useState<string>("");
  const data = useLoaderData();
  const errorData = useActionData();

  useEffect(() => {
    if (errorData && errorData.ErrorData) setError(errorData.ErrorData[0]);
    else if (errorData && errorData.message) setError(errorData.message);
    else setError("");
  }, [errorData]);

  return (
    <div className="flex flex-col items-center gap-8 justify-center my-20">
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

        <input hidden defaultValue={data?.data?.id} name="id" />

        <section className="flex flex-col gap-1">
          <label className="ml-0.5">Name</label>
          <input
            placeholder="Name"
            className="transition border p-2 rounded-md focus:-translate-y-1"
            name="name"
            type="text"
            autoComplete="off"
            defaultValue={data?.data?.name}
          />
        </section>

        <button className="transition rounded-md bg-indigo-600 py-1.5 text-white hover:cursor-pointer hover:bg-indigo-500 hover:-translate-y-1">
          Save
        </button>
      </Form>
    </div>
  );
}

export default GeneralForm;
