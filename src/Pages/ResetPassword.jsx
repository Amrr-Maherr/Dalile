import SubNav from "../Components/SubNav";
import Swal from "sweetalert2";
import "../Style/ResetPassword.css";
import ResetPasswordImage from "../Assets/newPassword.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملفات الأنيميشن

function ResetPassword() {
  const [Password, setPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [FormData, setFormData] = useState({});
  const [show, setShow] = useState(false);
  const Navigate = useNavigate();
  const email = JSON.parse(localStorage.getItem("user"));
  const UserCode = JSON.parse(localStorage.getItem("code"));

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

  const HandelFrom = (e) => {
    e.preventDefault();
  };

  const HandelResetPassword = () => {
    if (!Password || !NewPassword) {
      Swal.fire("خطأ", "يرجى إدخال جميع الحقول", "error");
    } else {
      const formData = {
        identifier: email.identifier,
        code: UserCode,
        password: NewPassword,
      };
      axios
        .post("https://dalil.mlmcosmo.com/api/update-password", formData)
        .then((response) => {
          Swal.fire("تم بنجاح", "تم تحديث كلمة المرور بنجاح", "success");
          Navigate("/");
        })
        .catch((error) => {
          Swal.fire(
            "خطأ",
            error.response?.data?.message || "حدث خطأ ما",
            "error"
          );
        });
    }
  };

  return (
    <>
      <div data-aos="fade-right">
        <SubNav />
      </div>
      <section className="py-4">
        <div className="container">
          <div
            className="row d-flex align-items-center justify-content-center"
            data-aos="fade-up"
          >
            <div className="col-xl-6 col-12" data-aos="zoom-in">
              <div className="resetPassword-image">
                <img src={ResetPasswordImage} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-12 text-end" data-aos="fade-left">
              <div className="resetPassword-link">
                <Link to="/login" className="fs-4 fs-md-3 fs-sm-5">
                  الرجوع لتسجيل الدخول
                </Link>
              </div>
              <div className="resetPassword-title">
                <h3 className="fs-1 fs-md-4 fs-sm-5 my-2">ادخل كلمه سر جديده</h3>
                <p className="fs-4 fs-md-3 fs-sm-5">
                  دخل الرمز الذي أرسلناه إلى رقمك 7698234***
                </p>
              </div>
              {show ? (
                <>
                  <div
                    className="resetPassword-form my-4"
                    data-aos="fade-right"
                  >
                    <div className="input-group mb-3">
                      <span className="input-icon">
                        <i
                          className="fa fa-lock"
                          onClick={() => {
                            showPass();
                          }}
                        ></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="أدخل كلمة المرور الخاصة بك"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span
                        className="input-icon"
                        onClick={() => {
                          showPass();
                        }}
                      >
                        <i className="fa fa-key"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="أدخل تأكيد كلمة المرور"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="resetPassword-form my-4" data-aos="fade-left">
                    <div className="input-group mb-3">
                      <span
                        className="input-icon"
                        onClick={() => {
                          showPass();
                        }}
                      >
                        <i className="fa fa-lock"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="أدخل كلمة المرور الخاصة بك"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span
                        className="input-icon"
                        onClick={() => {
                          showPass();
                        }}
                      >
                        <i className="fa fa-key"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="أدخل تأكيد كلمة المرور"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="resetPassword-button">
                <button
                  className="b-block w-100"
                  onClick={() => {
                    HandelResetPassword();
                  }}
                >
                  انشاء كلمه مرور جديده
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetPassword;
