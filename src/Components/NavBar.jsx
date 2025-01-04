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
                  <a className="active text-dark" to="/SearchPage">
                    
                  </a>
                </li>
                <li className="nav-item">
                  <a className="active text-dark" to="/favorites">
                    
                  </a>
                </li>
                <li className="nav-item">
                  <a className="active text-dark" to="/NotificationsPage">
                    
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 d-flex gap-4 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-a active text-dark" to="/contact">
                    اتصل بنا
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-a active text-dark" to="/Explore">
                    استكشف
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-a active text-dark" to="/home">
                    الرئيسية
                  </a>
                </li>
              </ul>
            </div>
            <a className="navbar-brand active logo text-dark" to="#">
              دليل المدينة 
            </a>
          </div>
        </nav>
      </>
    );
}
export default NavBar