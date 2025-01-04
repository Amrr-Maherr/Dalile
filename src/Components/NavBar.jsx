import "../Style/NavBarStyle.css"
function NavBar() {
    return (
      <>
        <nav className="navbar navbar-expand-xl  bg-white">
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 d-flex gap-4 mb-lg-0">
                <li className="nav-item ">
                  <a className="active text-dark" href="/SearchPage">
                    <i class="fa fa-search"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="active text-dark" href="/favorites">
                    <i class="fa fa-heart"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="active text-dark" href="/NotificationsPage">
                    <i class="fa fa-bell"></i>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 d-flex gap-4 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-a active text-dark" herf="/contact">
                    اتصل بنا
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-a active text-dark" href="/Explore">
                    استكشف
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-a active text-dark" href="/home">
                    الرئيسية
                  </a>
                </li>
              </ul>
            </div>
            <a className="navbar-brand active logo text-dark" to="#">
              دليل المدينة
            </a>
            <div className="user-image">
                
            </div>
          </div>
        </nav>
      </>
    );
}
export default NavBar