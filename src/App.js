
import './App.css';
import { Footer } from './components/footer/Footer';
import { RecommendationCards } from './components/recommendation-cards/RecommendationCards';
import Navbar from './components/header/Navbar';
import { Outlet } from "react-router-dom";



function App() {
  return (
    <div className="app">
      <header className='app-header'>
      <Navbar />
      </header>
      <main className='app-main'>
        <RecommendationCards />
        <RecommendationCards />
        <RecommendationCards />
      
      </main>
      <footer className='app-footer'>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
