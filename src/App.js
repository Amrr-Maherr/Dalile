import './App.css';
import "@fontsource/cairo";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
