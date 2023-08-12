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
import { useCallback, useEffect, useMemo, useState } from 'react';
import SearchComponent from './components/body/SearchComponent';
import Tvseries from './components/body/Tvseries';
import Details from './components/body/Detail2';


function App() {
  const [id, setId] = useState('');
  const [id2, setId2] = useState('');
 
  const [text,setText]=useState('')
  
  
  const split = text.split(' ');
  const joined = split.join('%20');
  
  

  const handleChange=(e)=>{
    setText(e.target.value)
  }
  const handleDetail = (id) => {
    setId(id);
  };
  const handleDetails = (id) => {
    setId2(id);
  };
  
  const handleClick=useCallback(()=>{
    let split=text.split(' ')
    let joined = split.join('%20');

    return joined
    
  },[])
  
  return (
    <div className='Parent'>
      
      <div className='child'>
        <Navbar handleClick={handleClick} handleDetail={handleDetail} handleChange={handleChange} text={text} width='100vw'/>
        <Routes>
          <Route path='/' element={<Card handleDetail={handleDetail}/>}/>
          <Route path='/popular' element={<Popular handleDetail={handleDetail}/>}/>
          <Route path='/top' element={<Top handleDetail={handleDetail}/>}/>
          <Route path='/upcoming' element={<Upcoming handleDetail={handleDetail}/>}/>
          <Route path='/detail' element={<Detail id={id}/>}/>
          <Route path='/detail2' element={<Details id={id2}/>}/>
          
          <Route path='/search' element={<SearchComponent joined={joined} handleDetail={handleDetail}/>} />
          <Route path='/tvseries' element={<Tvseries handleDetail={handleDetails}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;