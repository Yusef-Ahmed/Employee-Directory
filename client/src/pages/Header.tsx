import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center h-15 px-10 font-bold text-lg">
      <img
        className="h-3/5"
        src="https://5d.ae/themes/mysite/assets/img/5D-white.svg"
        alt="5D"
      />
      <section className="flex gap-12">
        <NavLink
          to="/"
          className={(isActive) =>
            (isActive ? "border-b-2 " : "") +
            "will-change-auto hover:-translate-y-1 hover:scale-125 duration-200"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/employees"}
          className={(isActive) =>
            (isActive ? "border-b-2 " : "") +
            "will-change-auto hover:-translate-y-1 hover:scale-125 duration-200"
          }
        >
          Employees
        </NavLink>
        <NavLink
          to="/departments"
          className={(isActive) =>
            (isActive ? "border-b-2 " : "") +
            "will-change-auto hover:-translate-y-1 hover:scale-125 duration-200"
          }
        >
          Departments
        </NavLink>
        <NavLink
          to="/jobTitle"
          className={(isActive) =>
            (isActive ? "border-b-2 " : "") +
            "will-change-auto hover:-translate-y-1 hover:scale-125 duration-200"
          }
        >
          Job Title
        </NavLink>
      </section>
      <section>
        <NavLink
          to="/login"
          className={(isActive) =>
            (isActive ? "border-b-2 " : "") +
            "will-change-auto hover:-translate-y-1 hover:scale-125 duration-200"
          }
        >
          Login
        </NavLink>
        {/* <NavLink to="/logout">logout</NavLink> */}
      </section>
    </header>
  );
}

export default Header;
