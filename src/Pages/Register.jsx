import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import RegisterImage from "../Assets/Register.png";
import "../Style/Register.css";
import SubNav from "../Components/SubNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Register() {
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const showPass = () => {
    setShow(!show);
  };

  const handelForm = (event) => {
    event.preventDefault();
  };

  const HandelRegister = () => {
    const userInfo = {
      name: `${FirstName} ${SecondName}`,
      email: Email,
      phone: PhoneNumber,
      password: Password,
    };
    if (!(FirstName || SecondName) || !Email || !PhoneNumber || !Password) {
      Swal.fire({
        icon: "error",
        title: "عذرًا...",
        text: "يرجى ملء جميع الحقول!",
        background: "#F9F9F9",
        confirmButtonColor: "red",
        confirmButtonText: "حسنا",
      });
    } else {
      axios
        .post("https://dalil.mlmcosmo.com/api/register", userInfo)
        .then((response) => {
          const successMessage = response.data.message;
          Swal.fire({
            title: "تمت العملية بنجاح",
            text: successMessage,
            icon: "success",
            background: "#F9F9F9",
            confirmButtonColor: "#EDB82C",
            confirmButtonText: "تسجيل الدخول",
          });
          setFirstName("");
          setSecondName("");
          setEmail("");
          setPhoneNumber("");
          setPassword("");
          setTimeout(() => {
            Navigate("/login");
          }, 2000);
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
      <div data-aos="zoom-in">
        <SubNav />
      </div>
      <section>
        <div className="container ">
          <div className="row   d-flex justify-content-between align-items-center">
            <div
              className="col-xl-6 col-12 d-flex justify-content-center align-items-center mb-4"
              data-aos="fade-up"
            >
              <div className="Register-image text-center">
                <img src={RegisterImage} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-6 col-12 log" data-aos="zoom-in">
              <div className="RegisterForm p-3">
                <form onSubmit={handelForm}>
                  <div className="row">
                    <div className="form-title text-end my-4">
                      <h3 className="fs-1 fs-md-3 fs-sm-5">تسجيل جديد</h3>
                      <p className="fs-md-3 fs-sm-5">
                        دعنا نساعدك جميعًا حتى تتمكن من الوصول إلى حسابك الشخصي.
                      </p>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-xl-6 col-12 mb-3 mb-xl-0 input-container">
                      <input
                        type="text"
                        className="form-control firstNameInput"
                        placeholder="أدخل الاسم الأول"
                        aria-label="First name"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        data-aos="fade-right"
                      />
                      <i className="fa fa-user icon"></i>
                    </div>
                    <div className="col-xl-6 col-12 input-container">
                      <input
                        type="text"
                        className="form-control secondNameInput"
                        placeholder="أدخل اسم العائلة"
                        aria-label="Last name"
                        value={SecondName}
                        onChange={(e) => setSecondName(e.target.value)}
                        data-aos="fade-left"
                      />
                      <i className="fa fa-user icon"></i>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-12 input-container">
                      <input
                        type="email"
                        className="form-control inputEmail"
                        placeholder="أدخل بريدك الإلكتروني"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        data-aos="fade-up"
                      />
                      <i className="fa fa-envelope icon"></i>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-12 input-container">
                      <input
                        type="text"
                        className="form-control phoneNumber"
                        placeholder="أدخل رقم الهاتف الخاص بك"
                        value={PhoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        data-aos="fade-up"
                      />
                      <i className="fa fa-phone icon"></i>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-12 input-container">
                      {show ? (
                        <>
                          <input
                            type="text"
                            className="form-control inputPassword"
                            placeholder="أدخل كلمة المرور الخاصة بك"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            data-aos="fade-right"
                          />
                        </>
                      ) : (
                        <>
                          <input
                            type="password"
                            className="form-control inputPassword"
                            placeholder="أدخل كلمة المرور الخاصة بك"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            data-aos="fade-up"
                          />
                        </>
                      )}
                      <i className="fa fa-lock icon" onClick={showPass}></i>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-12">
                      <button
                        className="w-100 Register-button"
                        type="button"
                        onClick={HandelRegister}
                      >
                        تسجيل جديد
                      </button>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12 text-end d-flex align-items-center">
                    <input
                      className="form-check-input mx-2"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fs-md-4 fs-sm-5"
                      htmlFor="flexCheckDefault"
                    >
                      وافق على <span>شروط الخدمة</span> وسياسة الخصوصية
                      <span>الخاصة بك</span>
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
