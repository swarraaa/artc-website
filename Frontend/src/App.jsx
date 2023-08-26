import React from 'react';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import Main from './Main';
import Admin from './components/admin/Admin'; 

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element = {<Main/>}/>
          <Route exact path='/admin' element = {<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
