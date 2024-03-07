import logo from './logo.svg';
import './App.css';
import TradingViewWidget from './tradeview';
import Navbar from './navbar/navbar';
import Getstarted from './getstarted/getstarted';
import Insidenav from './insidenav/insidenav';
import Performance from './performance/performance';
import Sentiment from './sentiment/sentiment';
import About from './about/about';
import Token from './token/token';
import Team from './team/team';
import Final from './final/final';
import Tradeview from './tradeview';
import image from './getstarted/getstarted.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function App() {
  return (
    <div className='master'>
      <div className="App">
        <Navbar />
        <div className='getstarted'>
          <Getstarted />
        </div>
        <div className='main-2'>
          <div className='main-left'>
            <div className='bitcoin'>
              <Tradeview />
            </div>
            <div className='inside_navbar'>
              <Insidenav />
            </div>
            <div className='performance_div'>
              <Performance />
            </div>
            <div className='sentiment_div'>
              <Sentiment />
            </div>
            <div className='about_bitcoin'>
              <About />
            </div>
            <div className='token_div'>
              <Token />
            </div>
            <div className='team_div'>
              <Team />
            </div>
          </div>
          <div className='main-right'>
            <div className='card'>
              <h3>Get Started with KoinX <br />for free</h3>
              <p>With our range of feature that you can equip for free ,KoinX allows you to more educated and aware of your tax reports</p>
              <img src={image}></img>
              <button className='btn'>Get started for FREE<ArrowForwardIcon sx={{ fontSize: 15 }} /></button>
            </div>
            <div className='top'>
              <h4>Trending Coins(24h)</h4>
              <p>Ethereum(ETH)<span><button className='top_btn' >8.21%</button></span></p>
              <p>Bitcoinse(BTC)<span><button className='top_btn'>8.21%</button></span></p>
              <p>Polygon(MATIC)<span><button className='top_btn'>8.21%</button></span></p>
            </div>
          </div>
        </div>
        <div className='final_div'>
          <Final />
        </div>
      </div>
    </div>
  );
}

export default App;
