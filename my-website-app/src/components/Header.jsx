import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full flex justify-between items-center py-6 px-8 bg-custom-yellow">
      {/* Logo */}
      <div className="text-white text-3xl font-bold cursor-pointer font-retro">
        <Link to="/">ohnoirene</Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link to="/" className="text-white text-lg font-medium hover:text-custom-dark-brown hover:scale-105 transition transform duration-200 font-retro">Home</Link>
        <Link to="/about" className="text-white text-lg font-medium hover:text-custom-dark-brown hover:scale-105 transition transform duration-200 font-retro">About</Link>
        <Link to="/pictures" className="text-white text-lg font-medium hover:text-custom-dark-brown hover:scale-105 transition transform duration-200 font-retro">Pictures</Link>
        <Link to="/contact" className="bg-custom-yellow text-custom-orange text-lg font-medium py-2 px-4 rounded-full hover:bg-custom-dark-brown hover:text-custom-light hover:shadow-lg transition transform duration-200 font-retro">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
