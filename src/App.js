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
import Profile from './Pages/Profile';
import Favorites from './Pages/Favorites';
import AllPlaces from './Pages/AllPlaces';
import Restaurants from "./Pages/Restaurants";
import Cafes from './Pages/Cafes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/verification-code" element={<VerificationCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/all-cafes" element={<Cafes />} />
          <Route path="/all-restaurants" element={<Restaurants />} />
          <Route path="/all-places" element={<AllPlaces />} />
          <Route path="/home/Place-details/:id" element={<SinglePlace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
