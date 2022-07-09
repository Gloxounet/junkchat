import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to <span>JunkChat</span>
      </h1>

      <Link to="/pseudo">Get Started</Link>

    </div>
  );
}

export default App;
