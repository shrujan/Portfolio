import './App.scss';
import About from './Component/About Me/About';
import BallGame from './Component/Game/ball-paddle';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <footer></footer>
      <BallGame></BallGame>
    </div>
  );
}

export default App;
