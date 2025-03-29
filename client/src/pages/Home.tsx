import { Link } from "react-router-dom";
import homeImg from "../assets/homeImg.png";
import { useScreenSize } from "../components/useScreenSize";

function Home() {
  const isMobile = useScreenSize();

  return (
    <main className="flex justify-between items-center h-[80vh]">
      <section className="lg:w-1/2 lg:ml-7 lg:px-0 lg:items-baseline px-3 mt-5 flex flex-col items-center">
        <h1 className="font-bold lg:text-6xl lg:text-left text-center text-2xl leading-snug">
          We Transform{" "}
          <span className="text-purple-600">Employee Directory</span> into
          Reality . . .
        </h1>
        <p className="mt-5 mb-15 text-gray-400">
          We transform employee directory management into reality with a
          seamless, efficient, and user-friendly platform. Easily search,
          update, and organize employee details in one centralized system,
          enhancing collaboration and streamlining HR processes.
        </p>
        <Link
          className="bg-indigo-600 rounded-md p-3 ml-2 px-7 hover:bg-indigo-500"
          to="/employees"
        >
          Take a look
        </Link>
      </section>
      {!isMobile && <img className="h-6/7" src={homeImg}></img>}
    </main>
  );
}

export default Home;
