import { useState } from 'react';
import './index.css'; // Ensure this file has Tailwind CSS setup

function App() {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render the content based on the current page
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <h1 className="text-5xl font-bold">Welcome to My Website</h1>;
      case 'about':
        return <h1 className="text-5xl font-bold">About Me</h1>;
      case 'photos':
        return <h1 className="text-5xl font-bold">My Photos</h1>;
      case 'contact':
        return <h1 className="text-5xl font-bold">Contact Me</h1>;
      default:
        return <h1 className="text-5xl font-bold">Welcome to My Website</h1>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-500">
      {/* Navigation Buttons */}
      <nav className="mb-8">
        <div className="flex space-x-4">
          <button
            onClick={() => setCurrentPage('home')}
            className="bg-white text-orange-500 hover:bg-orange-600 hover:text-white font-bold py-2 px-4 rounded-full transition"
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className="bg-white text-orange-500 hover:bg-orange-600 hover:text-white font-bold py-2 px-4 rounded-full transition"
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('photos')}
            className="bg-white text-orange-500 hover:bg-orange-600 hover:text-white font-bold py-2 px-4 rounded-full transition"
          >
            Photos
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-orange-500 hover:bg-orange-600 hover:text-white font-bold py-2 px-4 rounded-full transition"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="text-center text-white px-6 py-8">
        {renderContent()}
        <p className="text-lg mt-4">This is a space to share my journey and work.</p>
      </div>
    </div>
  );
}

export default App;
