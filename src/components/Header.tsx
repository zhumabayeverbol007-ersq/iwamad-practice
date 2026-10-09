import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg';

function Header() {
  const { likes } = useLikes();

  return (
    <header className="p-6 bg-white shadow-sm text-center">
      <div className="flex items-center justify-center gap-2">
        <img src={logo} alt="" width={32} height={32} />
        <h1 className="text-3xl font-bold">Yerbol</h1>
      </div>
      <p className="text-gray-600 mt-1">Web Development Student</p>

      <nav className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active text-blue-600 underline font-semibold' : 'text-gray-700'}>Home</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? 'active text-blue-600 underline font-semibold' : 'text-gray-700'}>Skills</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active text-blue-600 underline font-semibold' : 'text-gray-700'}>Contact</NavLink>
        <span className="text-gray-700">❤️ {likes}</span>
      </nav>
    </header>
  );
}

export default Header;