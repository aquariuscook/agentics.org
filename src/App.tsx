import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Jobs from './pages/Jobs';
import Community from './pages/Community';
import Merchandise from './pages/Merchandise';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Membership from './pages/Membership';

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
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="membership" element={<Membership />} />
        </Route>
      </Routes>
    </Router>
  );
}



