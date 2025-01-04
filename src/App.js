import './App.css';
import "@fontsource/cairo";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Home /> */}
        <Register/>
      </div>
    </BrowserRouter>
  );
}

export default App;
