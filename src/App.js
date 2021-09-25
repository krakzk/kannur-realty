import logo from './logo.svg';
import './App.css';
import IntroImageScreen from './screens/IntroImageScreen';
import HeaderSection from './screens/HeaderSection';
import DetailsPanel from './screens/DetailsPanel';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <IntroImageScreen />
      <DetailsPanel />
    </div>
  );
}

export default App;
