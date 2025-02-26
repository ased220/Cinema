 
import './App.css'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import Movie from './components/pages/Movie';

function App() { 

   
  return (
    <>
      <Header />
      <Home />
      {/* <Favorites /> */}
      {/* <Movie /> */}
      <Footer />
    </>
  )
}

export default App
