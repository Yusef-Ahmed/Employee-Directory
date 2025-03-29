import { Form, Link, useLoaderData } from "react-router-dom";

function Departments() {
  const response = useLoaderData();

  return (
    <>
      <div className="relative px-10 mt-10 mb-10">
        <section className="flex flex-col justify-center gap-10">
          <h1 className="text-center lg:text-5xl text-2xl font-bold">
            Department List
          </h1>
          <Link
            to="add"
            className="lg:absolute lg:right-10 lg:top-1/4 lg:-translate-y-1 text-center bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-500 transition duration-150 ease-in-out"
          >
            Add Department
          </Link>
        </section>
      </div>

      <div className="flex flex-wrap justify-around gap-y-10">
        {response.data.map(
          (department: { count: number; name: string; id: number }) => (
            <div
              className="w-[400px] border rounded-md p-5 flex flex-col justify-between gap-2"
              key={department.id}
            >
              <section className="flex flex-col items-center gap-2 mb-2 justify-around">
                <h1 className="text-2xl capitalize">
                  Department name:{" "}
                  <span className="text-xl ml-1">{department.name}</span>
                </h1>
                <h1 className="text-2xl capitalize">
                  Number of employees:{" "}
                  <span className="text-xl ml-1">{department.count}</span>
                </h1>
              </section>

              <section className="flex justify-around">
                <Form
                  method="delete"
                  onSubmit={(event) => {
                    if (
                      !confirm(
                        "Are you sure you want to delete this department?"
                      )
                    ) {
                      event.preventDefault();
                    }
                  }}
                >
                  <input hidden defaultValue={department.id} name="id" />
                  <button className="bg-red-600 hover:bg-red-500 p-2 rounded-sm hover:cursor-pointer hover:-translate-y-1 duration-150">
                    Delete
                  </button>
                </Form>
                <Link
                  className="bg-indigo-600 hover:bg-indigo-500 p-2 px-4 rounded-sm hover:-translate-y-1 duration-150"
                  to={`/departments/${department.id}`}
                >
                  Edit
                </Link>
              </section>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Departments;
