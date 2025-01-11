import { Link } from "react-router-dom";
import LogoImage from "../Assets/Logo.png"
import "../Style/NavBarStyle.css"
import { useEffect, useState } from "react";
import axios from "axios";
function NavBar() {
  const [UserInfo, setUserInfo] = useState({})
  const token = JSON.parse(localStorage.getItem("AuthToken"))
  useEffect(() => {
    axios
      .get("https://dalil.mlmcosmo.com/api/profile",{headers:{Authorization:`Bearer ${token}`}})
      .then((response) => {
        setUserInfo(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      },[token]);
  })
  return (
    <nav className="navbar navbar-expand-xl bg-white shadow">
      <div className="container">
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  text-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 d-flex gap-4 mb-lg-0">
            <li className="nav-item py-2">
              <Link className="active text-dark">
                <i className="fa fa-search"></i>
              </Link>
            </li>
            <li className="nav-item  py-2">
              <Link className="active text-dark" to="/favorites">
                <i className="fa fa-heart"></i>
              </Link>
            </li>
            <li className="nav-item  py-2">
              <Link className="active text-dark">
                <i className="fa fa-bell"></i>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 d-flex gap-4 mb-lg-0">
            <li className="nav-item  py-2">
              <Link className="nav-a active text-dark link">اتصل بنا</Link>
            </li>
            <li className="nav-item  py-2">
              <Link className="nav-a active text-dark link" to="/all-places">
                استكشف
              </Link>
            </li>
            <li className="nav-item  py-2">
              <Link className="nav-a active text-dark link" to="/home">
                الرئيسية
              </Link>
            </li>
          </ul>
        </div>
        <Link className="navbar-brand active logo text-dark  py-2">
          دليل المدينة <img src={LogoImage} alt="" />
        </Link>
        <div className="user-image  py-2">
          <img src={UserInfo} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
