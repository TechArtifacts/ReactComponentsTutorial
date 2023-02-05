import logo from './logo.svg';
import './App.css';
import WelcomeMessageClassComponent from './WelcomeMessageClassComponent';

function WelcomeMessage() {
  return <h1>Hello, Welcome! I am a Functional Component</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WelcomeMessageClassComponent name="Tech Artifacts"></WelcomeMessageClassComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
