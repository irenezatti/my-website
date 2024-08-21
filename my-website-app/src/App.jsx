import { useState } from 'react';
import './index.css'; // Ensure this file has Tailwind CSS setup

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="text-center mt-20">
            <h1 className="text-7xl font-extrabold text-yellow-400 font-poppins">
              Welcome to my website
            </h1>
            <p className="text-2xl mt-4 text-white font-quicksand">
              This is where I share stuff
            </p>
          </div>
        );
      case 'about':
        return (
          <div className="text-center mt-20">
            <h1 className="text-6xl font-extrabold text-white font-poppins">
              About Me
            </h1>
            <p className="text-xl mt-4 text-white max-w-2xl mx-auto font-quicksand">
              Welcome to my personal website! Here you'll find a collection of my projects, thoughts, and everything that I love sharing with the world. Stay tuned for more updates!
            </p>
          </div>
        );
      case 'pictures':
        return (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
            <img src="path_to_image_1" alt="Personal Pic 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="path_to_image_2" alt="Personal Pic 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="path_to_image_3" alt="Personal Pic 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        );
      case 'contact':
        return (
          <div className="text-center mt-20">
            <h1 className="text-6xl font-extrabold text-white font-poppins">
              Get in Touch
            </h1>
            <p className="text-xl mt-4 text-white font-quicksand">
              I'd love to hear from you! Reach out to me at{' '}
              <a href="mailto:contact@ohnoirene.com" className="text-yellow-400 underline">
                contact@ohnoirene.com
              </a>
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-orange-600 flex flex-col">
      {/* Navigation Bar */}
      <header className="w-full flex justify-between items-center py-6 px-8 bg-orange-700">
        {/* Logo */}
        <div className="text-white text-3xl font-bold cursor-pointer font-poppins" onClick={() => setCurrentPage('home')}>
          ohnoirene
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-white text-lg font-medium hover:text-yellow-400 hover:scale-105 transition transform duration-200 font-poppins"
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className="text-white text-lg font-medium hover:text-yellow-400 hover:scale-105 transition transform duration-200 font-poppins"
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('pictures')}
            className="text-white text-lg font-medium hover:text-yellow-400 hover:scale-105 transition transform duration-200 font-poppins"
          >
            Pictures
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-yellow-400 text-orange-700 text-lg font-medium py-2 px-4 rounded-full hover:bg-yellow-500 hover:shadow-lg transition transform duration-200 font-poppins"
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <div
        className="flex-grow flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('path_to_your_background_image')` }}
      >
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
