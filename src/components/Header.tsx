import { NavLink } from 'react-router';

function Header() {
  return (
    <header className="p-6 bg-white shadow-sm text-center">
      <h1 className="text-3xl font-bold">Yerbol</h1>
      <p className="text-gray-600 mt-1">Web Development Student</p>

      <nav className="mt-4 flex justify-center gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'active text-blue-600 underline font-semibold' : 'text-gray-700'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? 'active text-blue-600 underline font-semibold' : 'text-gray-700'
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'active text-blue-600 underline font-semibold' : 'text-gray-700'
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;