import logo from './logo.svg';
import './App.css';
import HeaderInfo from './components/HeaderInfo';
import NetPosition from './components/NetPosition';
import OrderBook from './components/OrderBook';

function App() {
  return (
    <div className="App">
      <HeaderInfo/>
      <NetPosition/>
      <OrderBook/>
    </div>
  );
}

export default App;
