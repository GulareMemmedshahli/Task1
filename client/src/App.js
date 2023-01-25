import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/footer';
import Header from './layout/header';
import About from './pages/about';
import Add from './pages/add';
import Contact from './pages/contact';
import Courses from './pages/courses';
import Details from './pages/details';
import Elements from './pages/elements';
import Home from './pages/home';
import News from './pages/news';

function App() {
  return (
    <div >
      <Header/>
 <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<Add />}/>
          <Route path='/about'  element={<About />} />
          <Route path='/courses'  element={<Courses />} />
          <Route path='/elements'  element={<Elements />} />
          <Route path='/news'  element={<News />} />
          <Route path='/contact'  element={<Contact />} />
          <Route path='/:_id'  element={<Details />} />
 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
