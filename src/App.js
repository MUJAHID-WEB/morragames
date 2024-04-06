import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Archive from './pages/Archive';
import Partner from './pages/Partner';
import News1 from './pages/News1';
import News2 from './pages/News2';
import Games1 from './pages/Games1';
import Games2 from './pages/Games2';
import ProgressBar from './Components/ProgressBar';

const App = () => {
  return (
    <>
     <ProgressBar/>
      <Routes>
    
        <Route path='/' element={<Index />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='/news1' element={<News1 />} />
        <Route path='/news2' element={<News2 />} />
        <Route path='/games1' element={<Games1 />} />
        <Route path='/games2' element={<Games2 />} />
      </Routes>
    </>
  )
}

export default App
