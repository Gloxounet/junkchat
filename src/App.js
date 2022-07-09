import ButtonArrow from './components/ButtonArrow.js'

function App() {
  return (
    <div className="flex-column" style={{gap:'96px',marginTop:'14vh'}}>
      <div className="flex-column" style={{gap:'14px'}}>
        <h1>
          Welcome to <span className="aqua">JunkChat</span>
        </h1>
        <h2>
          (basically it’s just a live chat.)
        </h2>
      </div>

        
      <ButtonArrow link_uri={'/pseudo'} text={'Start Now'} />

    </div>
  );
}

export default App;
