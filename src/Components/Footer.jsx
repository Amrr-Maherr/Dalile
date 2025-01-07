import { Link } from "react-router-dom";
import "../Style/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row text-end">
          <div className="col-xl-3 col-md-6 col-12 my-4 d-flex align-items-center justify-content-center flex-column">
            <form>
              <div className="row">
                <div className="col-12">
                  <div className="form-title text-center mb-4">
                    <h2>اخر اخبارنا</h2>
                  </div>
                </div>
                <div className="col-12 my-2">
                  <label htmlFor="">الايميل</label>
                </div>
                <div className="col-6">
                  <button className="w-100">اشتراك</button>
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    className="form-control email"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-xl-3 col-md-6 col-12 my-4 d-flex align-items-center justify-content-center flex-column">
            <p className="h5">معلومات</p>
            <ul className="list-unstyled">
              <li>
                <Link to="/places">الاماكن</Link>
              </li>
              <li>
                <Link to="/support">الدعم</Link>
              </li>
              <li>
                <Link to="/terms">البنود</Link>
              </li>
              <li>
                <Link to="/privacy">الخصوصيه</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-6 col-12 my-4  d-flex align-items-center justify-content-center flex-column">
            <p className="h5">القائمه</p>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">الرئيسيه</Link>
              </li>
              <li>
                <Link to="/profile">الصفحه الشخصيه</Link>
              </li>
              <li>
                <Link to="/favorites">المفضله</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-6 col-12 my-4 d-flex align-items-center justify-content-center flex-column">
            <p className="h5">دليل المدينه</p>
            <ul className="list-unstyled">
              <li>
                "هذا نص وهمي يُستخدم لأغراض التصميم والعرض. الغرض منه هو ملء
                المساحات النصية لإظهار الشكل النهائي للتصميم قبل إضافة المحتوى
                الفعلي
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
