import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PicturesPage from './pages/PicturesPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-custom-orange flex flex-col">
        {/* Navigation Bar */}
        <Header />

        {/* Main Content */}
        <div 
          className="flex-grow flex items-center justify-center bg-cover bg-center" 
          style={{ backgroundImage: `url('/path_to_your_background_image.jpg')` }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pictures" element={<PicturesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
