import './App.css';
import ButtonArrow from './components/ButtonArrow.js'

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to <span className="aqua">JunkChat</span>
      </h1>
      <h2>
        (basically it’s just a live chat.)
      </h2>

      <ButtonArrow link_uri={'/pseudo'} text={'Start Now'} />

    </div>
  );
}

export default App;
