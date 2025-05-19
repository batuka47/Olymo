import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
function App() {
  return (
    <Router>
      <Header />
      <PhoneHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/olympiad" element={<Olympiad />} />
        <Route path="/world" element={<World />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/science" element={<Science />} />
        <Route path='/events' element={<Events />} />
        <Route path='/:mainCategory/:name' element={<NewsTemplate />} />
      </Routes>
      <Footer />
      <PhoneFooter/>
    </Router>
  );
}

export default App;
