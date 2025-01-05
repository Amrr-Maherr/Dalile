import "../Style/SubNav.css"
import Logo from "../Assets/Logo.png"
import { Link } from "react-router-dom"
function SubNav() {
    return (
      <>
        <nav class="navbar bg-body-tertiary">
          <div class="container d-flex justify-content-end">
            <Link class="navbar-brand logo">
              دليل المدينه
              <img src={Logo} alt="logo-image" className="ms-2" />
            </Link>
          </div>
        </nav>
      </>
    );
}
export default SubNav