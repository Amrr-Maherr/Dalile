import { useEffect, useRef, useState } from "react";
import RegisterImage from "../Assets/Register.png";
import "../Style/Register.css";

function Register() {
    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("");
    const [Email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Password, setPassword] = useState("");
    const [UserInfo,setUserInfo] = useState("")
    const handelForm = (event) => {
        event.preventDefault()
    }
    
    const HandelRegister = () => {
        setUserInfo({ name: `${FirstName} ${SecondName}`, email: Email, phone: PhoneNumber, password: Password });
        
    }
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-12 d-flex justify-content-center align-items-center mb-4">
              <div className="Register-image text-center">
                <img src={RegisterImage} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <div className="RegisterForm p-3">
                <form
                  onSubmit={(event) => {
                    handelForm(event);
                  }}
                >
                  <div className="row">
                    <div className="form-title text-end">
                      <h3>تسجيل جديد</h3>
                      <p>
                        دعنا نساعدك جميعًا حتى تتمكن من الوصول إلى حسابك الشخصي.
                      </p>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-xl-6 col-12 mb-3 mb-xl-0">
                      <input
                        type="text"
                        className="form-control firstNameInput"
                        placeholder="أدخل الاسم الأول"
                        aria-label="First name"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-xl-6 col-12">
                      <input
                        type="text"
                        className="form-control secondNameInput"
                        placeholder="أدخل اسم العائلة"
                        aria-label="Last name"
                        onChange={(e) => {
                          setSecondName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control inputEmail"
                        placeholder="أدخل بريدك الإلكتروني"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-12">
                      <input
                        type="number"
                        className="form-control phoneNumber"
                        placeholder="أدخل رقم الهاتف الخاص بك"
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-12">
                      <input
                        type="password"
                        className="form-control inputPassword"
                        placeholder="أدخل كلمة المرور الخاصة بك"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-12">
                      <button
                        className=" w-100 Register-button"
                        onClick={() => {
                          HandelRegister();
                        }}
                      >
                        تسجيل جديد
                      </button>
                    </div>
                  </div>
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
                        وافق على <span>شروط الخدمة</span> وسياسة الخصوصية
                        <span>الخاصة بك</span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
