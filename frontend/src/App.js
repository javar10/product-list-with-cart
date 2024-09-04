import './App.css';
import DessertCard from './components/DessertCard';
import data from '../src/data.json';

function App() {
  console.log(data);
  return (
    <div className="App">
      <div className='main-desserts-div'>
        <h1>Desserts</h1>
        <div className='display-desserts-div'>
          {data.map(item => <DessertCard className='dessert-card' item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
