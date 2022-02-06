import logo from './logo.svg';
import './App.css';
import Login from './Components/Loginpage';
import PrimarySearchAppBar from './Components/Appbar';

function App() {
  return (
    <div className="App">
     <PrimarySearchAppBar/>
     <h1>React App</h1>
     <Login/>
    </div>
  );
}

export default App;
