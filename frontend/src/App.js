import logo from './logo.svg';
import './App.css';
import { CardManager } from "./components/cardManager";
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <CardManager/>
    </div>
  );
}

export default App;

