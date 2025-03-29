import { NavLink, useNavigate } from "react-router-dom";
import { useScreenSize } from "../components/useScreenSize";
import MobileHeader from "./MobileHeader";

function Header() {
  const isMobile = useScreenSize();
  const loggedIn = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/auth/login")
  }

  if (isMobile) {
    return <MobileHeader />;
  }

  return (
    <header className="flex justify-between items-center h-20 -mt-2 px-10 font-bold text-lg border-b-1 border-gray-400">
      <img
        className="h-3/5"
        src="https://5d.ae/themes/mysite/assets/img/5D-white.svg"
        alt="5D"
      />
      <section className="flex gap-12">
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive ? "border-b-2 " : "") +
            "will-change-auto hover:-translate-y-1 hover:scale-125 duration-200"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/employees"
          className={({ isActive }) =>
            (isActive ? "border-b-2 " : "") +
            "will-change-auto hover:-translate-y-1 hover:scale-125 duration-200"
          }
        >
          Employees
        </NavLink>
        <NavLink
          to="/departments"
          className={({ isActive }) =>
            (isActive ? "border-b-2 " : "") +
            "will-change-auto hover:-translate-y-1 hover:scale-125 duration-200"
          }
        >
          Departments
        </NavLink>
        <NavLink
          to="/jobTitles"
          className={({ isActive }) =>
            (isActive ? "border-b-2 " : "") +
            "will-change-auto hover:-translate-y-1 hover:scale-125 duration-200"
          }
        >
          Job Title
        </NavLink>
      </section>
      <section>
        {loggedIn ? (
          <button
            className="will-change-auto hover:-translate-y-1 hover:scale-125 duration-200 cursor-pointer"
            onClick={handleLogout}
          >
            logout
          </button>
        ) : (
          <NavLink
            to="/auth/login"
            className={({ isActive }) =>
              (isActive ? "border-b-2 " : "") +
              "will-change-auto hover:-translate-y-1 hover:scale-125 duration-200"
            }
          >
            Login
          </NavLink>
        )}
      </section>
    </header>
  );
}

export default Header;
