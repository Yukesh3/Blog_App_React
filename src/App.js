import Kollywood from './Components/Pages/Kollywood';
import Home from './Components/Main/Home'
import Data from "./Components/Data/Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./Components/Article/Article";
import Navbar from './Components/Main/Navbar';
import Hollywood from './Components/Pages/Hollywood';
import Technology from './Components/Pages/Technology';
import Fitness from './Components/Pages/Fitness';
import Food from './Components/Pages/Food'
import { useState } from 'react';

function App() {

  const [lightMode, setLightMode] = useState(true);

  const style={
    backgroundColor:lightMode ? 'white' : 'black',
    color:lightMode ? 'black' : 'white' ,
    opacity:1,
    transition: 'opacity 0.5s ease-in-out'
  }

  return (

    <div className="App" 
    style={style}>

    <span className='lightMode' onClick={e => setLightMode(e => !e)} 
    style={{ backgroundImage: `url(${lightMode ? 'https://img.icons8.com/fluency/344/light-on.png' : 'https://img.icons8.com/fluency/344/light.png'})` }} alt='BulpImg'>
    </span>

      <Data>

        <BrowserRouter>
          <Navbar style={style} />
          <Routes>

            <Route path='/' element={<Home style={{marginBottom: '2px',backgroundColor:lightMode ? 'white' : 'black',color:lightMode ? 'black' : 'white'}}/>} />
            <Route path='kollywood' element={<Kollywood style={style}/>} />
            <Route path='hollywood' element={<Hollywood style={style}/>} />
            <Route path='technology' element={<Technology style={style}/>} />
            <Route path='food' element={<Food style={style}/>} />
            <Route path='fitness' element={<Fitness style={style}/>} />
            <Route path='/article/:articleTitle/:articleCategory' element={<Article />} />

          </Routes>
        </BrowserRouter>
      </Data>

    </div>
  );
}

export default App;
