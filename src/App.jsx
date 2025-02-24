 
import './App.css'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Banner from './components/Home/Banner';
import Filter from './components/Home/Filter';
import MoviesList from './components/Movies/MoviesList';

function App() { 

  return (
    <>
      <Header />
      
      <Banner />
        <div className="container">
          <Filter />
          <MoviesList />  
          <div className="movies__scroll">
            <button>
              <i className="fa-solid fa-arrow-down" />
            </button>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default App
