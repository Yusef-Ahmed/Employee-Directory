import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import Cards from "../../components/Cards";
import PaginationControlled from "../../components/Pagination";

function Employees() {
  const [searchParams, setSearchParams] = useSearchParams();
  const response = useLoaderData();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSearchParams = new URLSearchParams(searchParams);
    (Array.from(event.currentTarget.elements) as HTMLFormElement[]).forEach(
      (element) => {
        if (element.name) {
          if (!element.value) newSearchParams.delete(element.name);
          else newSearchParams.set(element.name, element.value);
        }
      }
    );
    setSearchParams(newSearchParams);
  };

  return (
    <>
      <div className="relative px-10 mt-10 mb-15">
        <section className="flex flex-col justify-center gap-10">
          <h1 className="text-center lg:text-5xl text-2xl font-bold">Employees List</h1>
          <Link
            to="add"
            className="lg:absolute lg:right-10 lg:top-1/4 lg:-translate-y-1 text-center bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-500 transition duration-150 ease-in-out"
          >
            Add Employee
          </Link>
        </section>
      </div>
      <form className="w-full lg:px-10 px-2 mb-5 flex gap-10 lg:justify-normal justify-between" onSubmit={handleSubmit}>
        <div className="flex">
          <input
            className="lg:w-[20vw] w-full rounded-lg border pl-3 py-2 focus:-translate-y-1"
            placeholder="Search"
            name="search"
            autoComplete="off"
          ></input>
        </div>
        <button className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-500 hover:-translate-y-1 duration-150 cursor-pointer">
          Find
        </button>
      </form>
      {response.total ? (
        <>
          <Cards data={response.data} />
          <div className="flex justify-center my-8">
            <PaginationControlled total={Math.ceil(response.total / 6)} />
          </div>
        </>
      ) : (
        <h1 className="text-4xl text-center mt-20">No employees found</h1>
      )}
    </>
  );
}

export default Employees;
