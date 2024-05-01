
import './App.css';
import Actual_news from './components/Actual_news';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Investment from './components/Investment';
import InvestmentPotential from './components/InvestmentPotential';
import Mission from './components/Mission';
import Review from './components/Review';
import SecondPage from './components/SecondPage';
import Signup from './components/Signup';

function App() {
  return (
    <div >
        <Header/>
        <InvestmentPotential/>
        <SecondPage/>
        <ImageSlider/>
        <Mission/>
        <Review/>
        <Actual_news/>
        <Investment/>
        <Signup/>
        <Footer/>
    </div>
  );
}

export default App;
