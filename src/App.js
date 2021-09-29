import './App.css';
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import BannerBottom from './components/BannerBottom.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
			<Navbar />
			<Header />
			<Card/>
			<BannerBottom />
			<Footer />
    </div>
  );
}

export default App;
