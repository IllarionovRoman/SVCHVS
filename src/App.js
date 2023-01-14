import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header'
import Main from './components/main/Main'
import AboutUs from './components/about-us/AboutUs';
import ContactUs from './components/contact-us/ContactUs';
import DefaultComponent from './components/def-component/DefaultComponent';
import Tools from './components/tools/Tools';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<DefaultComponent />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/tools' element={<Tools />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
