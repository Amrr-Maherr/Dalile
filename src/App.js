import './App.css';
import "@fontsource/cairo";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ForgetPassword from "./Pages/ForgetPassword";
import VerificationCode from './Pages/VerificationCode';
import ResetPassword from './Pages/ResetPassword';
import SinglePlace from './Pages/SinglePlace';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/verification-code" element={<VerificationCode />} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="Place-details" element={<SinglePlace/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
