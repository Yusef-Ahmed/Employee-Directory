import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center h-[90vh] gap-10 justify-center">
      <h1 className="text-5xl font-bold">Page Not Found</h1>
      <h2 className="text-4xl font-semibold">404</h2>
      <Link className="text-xl font-semibold rounded-lg p-3 bg-[#4c4fef] hover:bg-[#4c4feff0]" to="/">Back to home</Link>
    </div>
  );
}

export default NotFound;
