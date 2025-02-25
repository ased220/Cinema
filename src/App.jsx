 
import './App.css'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';

function App() { 

   
  return (
    <>
      <Header />
      {/* <Favorites /> */}
      <Home />
      <Footer />
    </>
  )
}

export default App
