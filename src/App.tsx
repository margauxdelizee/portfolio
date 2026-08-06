import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navigation,
  Footer,
} from "./components";
import Home from './pages/Home';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </div>
    );
}

export default App;