
import './App.css';
import Extras from './components/Extras';
import Movies from './components/Movies';
import Sidebar from './components/Sidebar';
import "./App.css"

function App() {
  return (
    <div className='App' >
    <Sidebar />
    <Movies />
    <Extras />
    </div>
  );
}

export default App;
