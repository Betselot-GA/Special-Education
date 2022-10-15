import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HomePage from './pages/Home/home';
import AboutPage from './pages/About/about';
import ServicesPage from './pages/Services/services';
import Appointment from './pages/Appointment/appointment';
import Confirmation from './pages/Confirmation/confirmation';
import ContactPage from './pages/Contact/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/confirmation' element={<Confirmation/>} />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>
      </Router>
     
      <Footer/>
    </div>
  );
}

export default App;
