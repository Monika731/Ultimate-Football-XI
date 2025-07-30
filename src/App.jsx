import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePlayer from './pages/CreatePlayer';
import Gallery from './pages/Gallery';
import PlayerDetail from './pages/PlayerDetail';
import EditPlayer from './pages/EditPlayer';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePlayer />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/players/:id" element={<PlayerDetail />} />
            <Route path="/players/:id/edit" element={<EditPlayer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
