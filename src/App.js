import './App.css';
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import BannerBottom from './components/BannerBottom.jsx';

function App() {
  return (
    <div>
			<Navbar />
			<Header />
			<Card/>
			<BannerBottom />
    </div>
  );
}

export default App;
