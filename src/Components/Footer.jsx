import { Link } from "react-router-dom";
import "../Style/Footer.css";

function Footer() {
  return (
    <footer className="py-5">
      {" "}
      {/* إضافة padding للfooter */}
      <div className="container">
        <div className="row text-end">
          {/* قسم الاشتراك في آخر الأخبار */}
          <div className="col-xl-3 col-md-6 col-12 my-4 d-flex align-items-center justify-content-center flex-column">
            <form className="w-100">
              {" "}
              {/* جعل النموذج يأخذ كامل عرض العمود */}
              <div className="form-title text-center mb-3">
                {" "}
                {/* تقليل الهامش السفلي */}
                <h2 className="fs-5">اخر اخبارنا</h2>{" "}
                {/* استخدام fs-5 للتحكم بحجم الخط */}
              </div>
              <div className="mb-2 w-100">
                {" "}
                {/* هامش سفلي وتوسيع حقل الايميل */}
                <label
                  htmlFor="emailInput"
                  className="form-label text-center d-block"
                >
                  الايميل
                </label>{" "}
                {/* إضافة d-block لتوسيع الليبل */}
                <div className="d-flex">
                  <input
                    type="email"
                    className="form-control email form-control-sm me-2 flex-grow-1"
                    placeholder="أدخل بريدك الإلكتروني"
                    id="emailInput"
                  />
                  <button>اشتراك</button>
                </div>
              </div>
            </form>
          </div>

          {/* قسم المعلومات */}
          <div className="col-xl-3 col-md-6 col-12 my-4 d-flex align-items-center justify-content-center flex-column">
            <p className="h5 mb-3">معلومات</p> {/* إضافة هامش سفلي */}
            <ul className="list-unstyled text-center">
              {" "}
              {/* توسيط القائمة */}
              <li>
                <Link to="/places" className="text-decoration-none text-dark">
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

          {/* قسم القائمة */}
          <div className="col-xl-3 col-md-6 col-12 my-4  d-flex align-items-center justify-content-center flex-column">
            <p className="h5 mb-3">القائمه</p>
            <ul className="list-unstyled text-center">
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

          {/* قسم دليل المدينة */}
          <div className="col-xl-3 col-md-6 col-12 my-4 d-flex align-items-center justify-content-center flex-column">
            <p className="h5 mb-3">دليل المدينه</p>
            <ul className="list-unstyled text-center">
              <li className="small text-muted">
                {" "}
                {/* جعل النص صغير وباهت */}
                هذا نص وهمي يُستخدم لأغراض التصميم والعرض. الغرض منه هو ملء
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
