import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar'
import Card from './components/body/Card';
// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Popular from './components/body/Popular';
import bg from './svg.png'
import Top from './components/body/Top';
import Upcoming from './components/body/Upcoming';
import Detail from './components/body/Detail';
import { useEffect, useState } from 'react';


function App() {
  const [id, setId] = useState('');

  useEffect(() => {
    
    setId('12345');
  }, []);

  const handleDetail = (id) => {
    setId(id);
  };

  return (
    <div className='Parent'>
      
      <div className='child'>
        <Navbar width='100vw'/>
        <Routes>
          <Route path='/' element={<Card handleDetail={handleDetail}/>}/>
          <Route path='/popular' element={<Popular handleDetail={handleDetail}/>}/>
          <Route path='/top' element={<Top handleDetail={handleDetail}/>}/>
          <Route path='/upcoming' element={<Upcoming handleDetail={handleDetail}/>}/>
          <Route path='/detail' element={<Detail id={id}/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;