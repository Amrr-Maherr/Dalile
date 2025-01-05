import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "../Style/HomeStyle.css";
function Home() {
  return (
    <>
      <NavBar />
      <section className="Home-section">
        <div className="container">
          <div className="Hero-content text-center">
            <div className="Hero-title">
              <h1>
                استكشف العالم من حولك بسهولة <br />
                وابتكار
              </h1>
            </div>
            <div className="Hero-buttons">
              <Link to="/register" className="register-btn btn">تسجيل</Link>
              <Link to="login" className="login-btn btn">تسجيل دخول</Link>
              <button  className="logout-btn btn">تسجيل خروج</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
