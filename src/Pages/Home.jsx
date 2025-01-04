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
              <button className="register-btn">تسجيل</button>
              <button className="login-btn">تسجيل دخول</button>
              <button className="logout-btn">تسجيل خروج</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
