import './App.css';
import DessertCard from './components/DessertCard';
import data from '../src/data.json';

function App() {
  console.log(data);
  return (
    <div className="App">
      <h1>Desserts</h1>
      {data.map(item => <DessertCard item={item}/>)}
    </div>
  );
}

export default App;
