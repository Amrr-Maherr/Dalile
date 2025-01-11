import { Link } from "react-router-dom";
import "../Style/Footer.css";

function Footer() {
  return (
    <footer className="custom-footer py-5">
      <div className="container">
        <div className="row">
          {/* Subscription Form */}
          <div className="col-lg-3 col-md-6 mb-4 text-start">
            <h5 className="text-dark text-end">اخر اخبارنا</h5>
            <form className="d-flex text-end flex-column">
              <label htmlFor="emailInput" className="text-dark">
                الايميل
              </label>
              <div className="d-flex text-end">
                <input
                  type="email"
                  className="form-control form-control-sm me-2 flex-grow-1"
                  placeholder="أدخل بريدك الإلكتروني"
                  id="emailInput"
                />
                <button className="btn btn-warning">اشتراك</button>
              </div>
            </form>
          </div>

          {/* City Guide Section */}
          <div className="col-lg-3 col-md-6 mb-4 text-end">
            <h5 className="text-dark">دليل المدينه</h5>
            <p className="small text-muted">
              هذا نص وهمي يُستخدم لأغراض التصميم والعرض. الغرض منه هو ملء
              المساحات النصية لإظهار الشكل النهائي للتصميم قبل إضافة المحتوى
              الفعلي.
            </p>
          </div>

          {/* List Section */}
          <div className="col-lg-3 col-md-6 mb-4 text-end">
            <h5 className="text-dark">القائمه</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home" className="text-decoration-none text-dark">
                  الرئيسيه
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-decoration-none text-dark">
                  الصفحه الشخصيه
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="text-decoration-none text-dark"
                >
                  المفضله
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="col-lg-3 col-md-6 mb-4 text-end">
            <h5 className="text-dark">معلومات</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/all-places"
                  className="text-decoration-none text-end"
                >
                  الاماكن
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-decoration-none text-dark">
                  الدعم
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-decoration-none text-dark">
                  البنود
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-decoration-none text-dark">
                  الخصوصيه
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="text-muted">
              &copy; 2025 جميع الحقوق محفوظة | تصميم وتطوير بواسطة
              <a
                href="https://github.com/amrr-maherr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                Amr Maher Ali
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
