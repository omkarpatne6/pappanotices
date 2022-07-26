import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Details from './Details'
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/details/:slug' element={<Details />}></Route>
      </Routes>

      
    </>
  );
}

export default App;
