import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import Movie from './components/pages/Movie';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies } from './Redux/slices/moviesSlice';

function AppMain() { 

  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(fetchMovies());
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <Header />

          <Routes>

            <Route path = '/' element = { <Home />} />
            <Route path = '/favorites' element = { <Favorites />} />
            <Route path = '/movie/:id' element = {<Movie />} />
            <Route path = '*' element = {<Home />} />

          </Routes>
          
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default AppMain
