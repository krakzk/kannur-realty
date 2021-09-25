import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
