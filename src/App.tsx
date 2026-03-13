import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Jobs from './pages/Jobs';
import Community from './pages/Community';
import Merchandise from './pages/Merchandise';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="community" element={<Community />} />
          <Route path="merchandise" element={<Merchandise />} />
        </Route>
      </Routes>
    </Router>
  );
}



