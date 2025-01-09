import SubNav from "../Components/SubNav";
import Swal from "sweetalert2";
import "../Style/Login.css";
import loginImage from "../Assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const Navigate = useNavigate();
  const showPass = () => {
    setShow(!show);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const HandelForm = (event) => {
    event.preventDefault();
  };

  const HandelLogin = () => {
    const UserInfo = {
      email: Email,
      password: Password,
    };
    if (!Email || !Password) {
      Swal.fire({
        icon: "error",
        title: "عذرًا...",
        text: "يرجى ملء جميع الحقول!",
        background: "#F9F9F9",
        confirmButtonColor: "red",
        confirmButtonText: "حسنا",
      });
    } else {
      localStorage.setItem("AuthToken", JSON.stringify(UserInfo));
      axios
        .post("https://dalil.mlmcosmo.com/api/login", UserInfo)
        .then((response) => {
          if (response.data && response.data.token) {
            const token = response.data.token;
            localStorage.setItem("AuthToken", JSON.stringify(token));
            const successMessage = response.data.message;
            Swal.fire({
              title: "تمت العملية بنجاح",
              text: successMessage,
              icon: "success",
              background: "#F9F9F9",
              confirmButtonColor: "#EDB82C",
              confirmButtonText: "تسجيل الدخول",
            });
            setEmail("");
            setPassword("");
            setTimeout(() => {
              Navigate("/");
            }, 2000);
          }
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          Swal.fire({
            icon: "error",
            title: "فشل التسجيل",
            text: errorMessage,
          });
        });
    }
  };

  return (
    <>
      <div data-aos="fade-right">
        <SubNav />
      </div>
      <section>
        <div className="container">
          <div className="row mt-4  d-flex align-items-center justify-content-between">
            <div className="col-xl-6 col-12" data-aos="fade-right">
              <div className="login-image">
                <img src={loginImage} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-12 mb-5 log " data-aos="fade-left">
              <div className="login-title text-end">
                <h3 className="fs-2 fs-sm-4 fs-md-5">تسجيل دخول</h3>
                <p>تسجيل الدخول للوصول إلى حسابك</p>
              </div>
              <div className="login-form mb-5">
                <form onSubmit={HandelForm}>
                  <div className="col mb-4" data-aos="fade-up">
                    <div className="input-container">
                      <input
                        type="email"
                        className="form-control email"
                        id="emailInput"
                        placeholder="أدخل بريدك الإلكتروني"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <i className="fa fa-envelope icon"></i>
                    </div>
                  </div>

                  <div className="col mb-2" data-aos="fade-up">
                    {show ? (
                      <>
                        <div className="input-container">
                          <input
                            type="text"
                            className="form-control password"
                            id="passwordInput"
                            placeholder="أدخل كلمة المرور الخاصة بك"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                          <i
                            className="fa fa-lock icon"
                            onClick={() => {
                              showPass();
                            }}
                          ></i>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="input-container">
                          <input
                            type="password"
                            className="form-control password"
                            id="passwordInput"
                            placeholder="أدخل كلمة المرور الخاصة بك"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                          <i
                            className="fa fa-lock icon"
                            onClick={() => {
                              showPass();
                            }}
                          ></i>
                        </div>
                      </>
                    )}
                  </div>
                </form>
                <div className="col-xl-6 col-12 w-100 my-4" data-aos="fade-up">
                  <div className="login-links d-flex align-items-center justify-content-between">
                    <div className="">
                      <Link
                        to="/forget-password"
                        className="fs-6 fs-sm-4 fs-md-5"
                      >
                        هل نسيت كلمه السر؟
                      </Link>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="form-check d-flex justify-content-end gap-2">
                        <input
                          className="form-check-input check"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label fs-6 fs-sm-4 fs-md-5"
                          htmlFor="flexCheckDefault"
                        >
                          تذكرنى
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-12 w-100 mb-3">
                  <div className="login-button">
                    <button className="d-block w-100" onClick={HandelLogin}>
                      تسجيل الدخول
                    </button>
                  </div>
                </div>
                <div className="col-xl-6 col-12 w-100 mb-2">
                  <div className="login-register">
                    <p className="fs-6 fs-sm-4 fs-md-5">
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
