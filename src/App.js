import logo from './logo.svg';
import './App.css';
import HeaderInfo from './components/HeaderInfo';
import NetPosition from './components/NetPosition';
import OrderBook from './components/OrderBook';
import IntradayGraph from './components/IntradayGraph';

function App() {
  return (
    <div className="App">
      <HeaderInfo/>
      <NetPosition/>
      <OrderBook/>
      <IntradayGraph/>
    </div>
  );
}

export default App;
