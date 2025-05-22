import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Education from './pages/Education';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import World from './pages/World';
import Olympiad from './pages/Olympiad';
import Header from './components/header';
import PhoneHeader from './components/phoneHeader';
import Footer from './components/footer';
import Events from './pages/Events';
import NewsTemplate from './pages/NewsTemplate'
import PhoneFooter from './components/phoneFooter';
import PhoneNav from './components/phoneNav';
import AboutUs from './pages/AboutUs';
import EventTemplate from './pages/EventTemplate';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <Header />
      <PhoneHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <PhoneNav isSidebarOpen={isSidebarOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/olympiad" element={<Olympiad />} />
        <Route path="/world" element={<World />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/science" element={<Science />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:mainCategory/:name' element={<EventTemplate />} />
        <Route path='/:mainCategory/:name' element={<NewsTemplate />} />
        <Route path='/about' element={<AboutUs/>} />
      </Routes>
      <Footer />
      <PhoneFooter/>
    </Router>
  );
}

export default App;
