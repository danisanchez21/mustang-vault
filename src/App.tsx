import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryView from './components/GalleryView';
import SplashScreen from './components/SplashScreen';
import MainMenu from './components/MainMenu'; // <- cuando lo tengas

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/gallery" element={<GalleryView />} />
      </Routes>
    </Router>
  );
}

export default App;
