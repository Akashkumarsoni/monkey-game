import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NextPage from './pages/NextPage';
import YesPage from './pages/YesPage';
import PlayStart from './pages/PlayStart';
import GamePage from './pages/GamePage';
import { WinnerCount } from './assets/svgs/svgs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/next" element={<NextPage />} />
          <Route path="/confirm" element={<YesPage />} />
          <Route path="/method" element={<PlayStart />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
