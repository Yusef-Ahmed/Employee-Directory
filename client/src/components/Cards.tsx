import { Form, Link } from "react-router-dom";
import { IEmployee } from "../interfaces/employee.interface";

function Cards({ data }: { data: IEmployee[] }) {
  return (
    <div className="flex flex-wrap justify-around gap-y-10">
      {data.map((employee: IEmployee) => (
        <div
          className="w-[400px] border rounded-md p-5 flex flex-col justify-between gap-2"
          key={employee.id}
        >
          <header>
            <section className="flex items-center gap-2 mb-2 justify-around">
              <h1 className="text-2xl capitalize">{employee.fullName}</h1>
              {/* status */}
              <section className="flex text-md items-center gap-2">
                <span
                  className={
                    " h-3 w-3 inline-block rounded-full " +
                    (employee.status ? "bg-green-600" : "bg-red-600")
                  }
                />
                <h2>{employee.status ? "Active" : "Inactive"}</h2>
              </section>
            </section>

            <section className="flex flex-wrap gap-x-3 justify-center text-md mb-5">
              <h2>{employee.phoneNumber}</h2>|<h2>{employee.email}</h2>|
              <h2>{employee.departmentName}</h2>|
              <h2>{employee.jobTitleName}</h2>|
              <h2>
                Joined at: {new Date(employee.createdAt).toLocaleDateString()}
              </h2>
            </section>
          </header>
          <section className="flex justify-around">
            <Form
              method="delete"
              onSubmit={(event) => {
                if (
                  !confirm("Are you sure you want to delete this employee?")
                ) {
                  event.preventDefault();
                }
              }}
            >
              <input hidden defaultValue={employee.id} name="id" />
              <button className="bg-red-600 hover:bg-red-500 p-2 rounded-sm hover:cursor-pointer hover:-translate-y-1 duration-150">
                Delete
              </button>
            </Form>
            <Link
              className="bg-indigo-600 hover:bg-indigo-500 p-2 px-4 rounded-sm hover:-translate-y-1 duration-150"
              to={`/employees/${employee.id}`}
            >
              Edit
            </Link>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Cards;
