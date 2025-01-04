import './App.css';
import "@fontsource/cairo";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home/>
      </div>
    </BrowserRouter>
  );
}

export default App;
