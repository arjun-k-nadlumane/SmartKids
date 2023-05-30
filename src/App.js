import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/Preloader/Preloader';
import AdventureTypes from './pages/AdventureTypes/AdventureTypes';
// import AdventureTypes from './pages/AdventureTypes/AdventureTypes';
import Hero from './pages/Hero/Hero';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import TravelPlanner from './pages/TravelPlanner/TravelPlanner';
function App() {
  const [content, setContent] = useState('none');
  const [loader, setLoader] = useState('flex');
  useEffect(() => {
    setTimeout(() => {
      setContent('block')
      setLoader('none')
    }, 8000)
  }, [])
  return (
    <div className='App'>
      <Preloader loader={loader} />
      <AnimatePresence mode='wait'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Hero content={content} />} />
            <Route path='/types' element={<AdventureTypes />} />
            <Route path='/planner' element={<TravelPlanner/>} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div >
  );
}

export default App;
