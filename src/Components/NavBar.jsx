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
        console.log(response.data);
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      },[]);
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 d-flex gap-4 mb-lg-0">
            <li className="nav-item">
              <Link className="active text-dark">
                <i className="fa fa-search"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="active text-dark">
                <i className="fa fa-heart"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="active text-dark">
                <i className="fa fa-bell"></i>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 d-flex gap-4 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-a active text-dark link">اتصل بنا</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-a active text-dark link">استكشف</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-a active text-dark link" to="/">الرئيسية</Link>
            </li>
          </ul>
        </div>
        <Link className="navbar-brand active logo text-dark">
          دليل المدينة <img src={LogoImage} alt="" />
        </Link>
        <div className="user-image">
          <img src={UserInfo.image} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
