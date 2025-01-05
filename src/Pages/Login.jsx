import SubNav from "../Components/SubNav"
import Swal from "sweetalert2";
import "../Style/Login.css"
import loginImage from "../Assets/login.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const Navigate = useNavigate()
    const HandelForm = (event) => {
        event.preventDefault();
    };

    const HandelLogin = () => {
        const UserInfo = {
            email: Email, // تم تعديلها لتصبح email بدلاً من name
            password: Password // تم تعديلها لتصبح password بدلاً من email
        };
        
        axios
          .post("https://dalil.mlmcosmo.com/api/login", UserInfo)
          .then((response) => {
              const token = response.data.token;
              localStorage.setItem("AuthToken", JSON.stringify(token));
              const successMessage = response.data?.message;
              Swal.fire({
                        title: "نجاح!",
                        text: successMessage,
                        icon: "success",
              });
              setEmail("")
              setPassword("")
              setTimeout(() => {
                  Navigate("/");
              },2000)
          })
          .catch((error) => {
              const errorMessage = error.response?.data?.message;
              Swal.fire({
                        icon: "error",
                        title: "خطأ",
                        text: errorMessage,
              });
          });
    };

    return (
      <>
        <SubNav />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-12">
                <div className="login-image">
                  <img src={loginImage} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-12 mb-5">
                <div className="login-title text-end">
                  <h3>تسجيل دخول</h3>
                  <p>تسجيل الدخول للوصول إلى حسابك</p>
                </div>
                <div className="login-form  mb-5">
                  <form onSubmit={HandelForm}>
                    <div className="col  mb-5">
                      <input
                        type="email"
                        className="form-control email"
                        id="emailInput" // تم تغيير الـ id هنا
                        placeholder="أدخل بريدك الإلكتروني"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col  mb-3">
                      <input
                        type="password"
                        className="form-control password"
                        id="passwordInput" // تم تغيير الـ id هنا
                        placeholder="أدخل كلمة المرور الخاصة بك"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </form>
                  <div className="col-xl-6 col-12 w-100 mb-5">
                    <div className="login-links  d-flex align-items-center justify-content-between">
                      <div className="col">
                        <Link to="/forget-password">هل نسيت كلمه السر؟</Link>
                      </div>
                      <div className="col d-flex justify-content-end">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            تذكرنى
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-12  w-100  mb-3">
                    <div className="login-button">
                      <button className="d-block w-100" onClick={HandelLogin}>
                        تسجيل الدخول
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-6 col-12 w-100  mb-2">
                    <div className="login-register">
                      <p>
                        ليس لديك حساب ?<Link to="/register">سجل الان</Link>
                      </p>
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

export default Login;
