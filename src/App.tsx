import React, {useState, useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Navigation,
  Footer,
} from "./components";
import Home from './pages/Home';
import ProjectDetail from './components/ProjectDetail';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const location = useLocation();

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        const state = location.state as { scrollTo?: string } | null;

        if (state?.scrollTo) {
            const target = document.getElementById(state.scrollTo);
            if (target) {
                target.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
                return;
            }
        }

        window.scrollTo({top: 0, left: 0, behavior: 'instant' as ScrollBehavior});
    }, [location.pathname, location.state]);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
    </div>
    );
}

export default App;
