import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import Movie from './components/pages/Movie';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() { 


  // useEffect(()=>{
  //     async function FetchFilms(){
  //       await fetch('https://67c063aeb9d02a9f224981ff.mockapi.io/ednpoint/movie')
  //       .then( data => {
  //           return data.json();
  //       })
  //       .then( data => {
  //           setValue(data);
  //       })
  //       .catch(() => {
  //           console.log('error');
  //       })
  //     }
  //     FetchFilms()
  // },[])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Provider store ={store}>

          <Routes>

            <Route path = '/' element = { <Home />} />
            <Route path = '/favorites' element = { <Favorites />} />
            <Route path = '/movie' element = {<Movie />} />
            <Route path = '*' element = {<Home />} />

          </Routes>

        </Provider>
          
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App
