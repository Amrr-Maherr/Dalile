import RegisterImage from "../Assets/Register.png";
import "../Style/Register.css";

function Register() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {/* صورة التسجيل */}
            <div className="col-xl-6 col-12 d-flex justify-content-center align-items-center mb-4">
              <div className="Register-image text-center">
                <img src={RegisterImage} alt="" className="img-fluid" />
              </div>
            </div>

            {/* نموذج التسجيل */}
            <div className="col-xl-6 col-12">
              <div className="RegisterForm p-3">
                {/* العنوان */}
                <div className="row">
                  <div className="form-title text-end">
                    <h3>تسجيل جديد</h3>
                    <p>
                      دعنا نساعدك جميعًا حتى تتمكن من الوصول إلى حسابك الشخصي.
                    </p>
                  </div>
                </div>

                {/* الاسم الأول واسم العائلة */}
                <div className="row mb-3">
                  <div className="col-xl-6 col-12 mb-3 mb-xl-0">
                    <input
                      type="text"
                      className="form-control firstNameInput"
                      placeholder="أدخل الاسم الأول"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col-xl-6 col-12">
                    <input
                      type="text"
                      className="form-control secondNameInput"
                      placeholder="أدخل اسم العائلة"
                      aria-label="Last name"
                    />
                  </div>
                </div>

                {/* البريد الإلكتروني */}
                <div className="row mb-3">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control inputEmail"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>

                {/* رقم الهاتف */}
                <div className="row mb-3">
                  <div className="col-12">
                    <input
                      type="number"
                      className="form-control phoneNumber"
                      placeholder="أدخل رقم الهاتف الخاص بك"
                    />
                  </div>
                </div>

                {/* كلمة المرور */}
                <div className="row mb-3">
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control inputPassword"
                      placeholder="أدخل كلمة المرور الخاصة بك"
                    />
                  </div>
                </div>

                {/* زر التسجيل */}
                <div className="row mb-3">
                  <div className="col-12">
                    <button className=" w-100 Register-button">
                      تسجيل جديد
                    </button>
                  </div>
                </div>

                {/* شروط الخدمة */}
                <div className="row">
                  <div className="col-12 text-end">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      وافق على شروط الخدمة وسياسة الخصوصية الخاصة بك
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
