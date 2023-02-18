
import './App.css';
import { Footer } from './components/footer/Footer';
import { RecommendationCards } from './components/recommendation-cards/RecommendationCards';
import Navbar from './components/header/Navbar';




function App() {
  return (
    <div className="app">

      <Navbar />
      <main className='app-main'>
        <RecommendationCards />
        <RecommendationCards />
        <RecommendationCards />
      
      </main>

      <Footer/>
 
    </div>
  );
}

export default App;
