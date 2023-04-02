// import logo from './logo.svg';
import qrcode from './assets/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn Reacttt*/}
        {/*</a>*/}
        <div className="card-container">
          <div className="card-image">
            <img src={qrcode} className="App-logo" alt="logo"/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Improve your front-end skills by building projects</h5>
            <p className="card-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
