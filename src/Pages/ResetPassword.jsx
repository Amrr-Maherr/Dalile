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
  const Navigate = useNavigate();
  const email = JSON.parse(localStorage.getItem("user"));
  const UserCode = JSON.parse(localStorage.getItem("code"));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    if (email && UserCode) {
      setFormData({
        identifier: email.email,
        code: UserCode.code,
        password: NewPassword,
      });
    }
  }, [NewPassword, email, UserCode]);

  const HandelFrom = (e) => {
    e.preventDefault();
    HandelResetPassword();
  };

  const HandelResetPassword = () => {
    if (Password === "" || NewPassword === "") {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "الرجاء ملء جميع الحقول.",
      });
    } else {
      setFormData({
        identifier: email,
        code: UserCode.code,
        password: NewPassword,
      });
      axios
        .post("https://dalil.mlmcosmo.com/api/reset-password", FormData) // تأكد من صحة الرابط
        .then((response) => {
          const successMessage = response.data?.message;
          Swal.fire({
            title: "نجاح!",
            text: successMessage,
            icon: "success",
          });
          Navigate("/login");
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.message || "حدث خطأ";
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: errorMessage,
          });
        });
    }
  };

  return (
    <>
      <SubNav />
      <section>
        <div className="container">
          <div className="row mt-4">
            <div className="col-xl-6 col-12" data-aos="fade-right">
              <div className="resetPassword-image">
                <img src={ResetPasswordImage} alt="Reset Password" />
              </div>
            </div>
            <div className="col-xl-6 col-12 text-end" data-aos="fade-left">
              <div className="resetPassword-form">
                <div className="resetPassword-link my-4" data-aos="fade-up">
                  <Link to="/login">
                    الرجوع لتسجيل الدخول
                    <i className="fa fa-chevron-right mx-2"></i>
                  </Link>
                </div>
                <div className="resetPassword-title my-4" data-aos="fade-up">
                  <h3>ادخل كلمه سر جديدة</h3>
                  <p>دخل الرمز الذي أرسلناه إلى رقمك 7698234***</p>
                </div>
                <form onSubmit={HandelFrom}>
                  <input
                    type="password"
                    className="form-control my-4"
                    id="inputPassword1"
                    placeholder="أدخل كلمة المرور الحالية"
                    onChange={(e) => setPassword(e.target.value)}
                    data-aos="fade-up"
                  />
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="أدخل كلمة المرور الجديدة"
                    onChange={(e) => setNewPassword(e.target.value)}
                    data-aos="fade-up"
                  />
                  <div className="resetPassword-button mt-5" data-aos="fade-up">
                    <button className="d-block w-100" type="submit">
                      انشاء كلمة مرور جديدة
                    </button>
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

export default ResetPassword;
