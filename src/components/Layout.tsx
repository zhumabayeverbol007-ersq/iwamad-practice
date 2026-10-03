import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer year={2026} author="Yerbol" />
    </div>
  );
}

export default Layout;