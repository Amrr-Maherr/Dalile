import { Link } from "react-router-dom";
import ResetPasswordImage from "../Assets/newPassword.png";
import Swal from "sweetalert2";
import SubNav from "../Components/SubNav";
import "../Style/ResetPassword.css";
import { useState, useEffect } from "react";
import axios from "axios";

function ResetPassword() {
  const [Password, setPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [FormData, setFormData] = useState({});

  const UserInfo = JSON.parse(localStorage.getItem("UserInfo"));
  const UserCode = JSON.parse(localStorage.getItem("code"));

  useEffect(() => {
    if (UserInfo && UserCode) {
      setFormData({
        identifier: UserInfo.email,
        code: UserCode.code,
        password: NewPassword,
      });
    }
  }, [NewPassword]);

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
      axios
        .post("https://dalil.mlmcosmo.com/api/reset-password", FormData) // يجب أن تضع الرابط الصحيح هنا
        .then((response) => {
          const successMessage = response.data?.message;
          Swal.fire({
            title: "نجاح!",
            text: successMessage,
            icon: "success",
          });
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.message || "حدث خطأ";
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: errorMessage,
          });
        })
    }
  };

  return (
    <>
      <SubNav />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-12">
              <div className="resetPassword-image">
                <img src={ResetPasswordImage} alt="Reset Password" />
              </div>
            </div>
            <div className="col-xl-6 col-12 text-end">
              <div className="resetPassword-form">
                <div className="resetPassword-link my-4">
                  <Link to="/login">
                    الرجوع لتسجيل الدخول
                    <i className="fa fa-chevron-right mx-2"></i>
                  </Link>
                </div>
                <div className="resetPassword-title my-4">
                  <h3>ادخل كلمه سر جديده</h3>
                  <p>دخل الرمز الذي أرسلناه إلى رقمك 7698234***</p>
                </div>
                <form onSubmit={HandelFrom}>
                  <input
                    type="password"
                    className="form-control my-4"
                    id="inputPassword1"
                    placeholder="أدخل كلمة المرور الحالية"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="أدخل كلمة المرور الجديدة"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <div className="resetPassword-button mt-5">
                    <button
                      className="d-block w-100"
                      type="submit"
                    >
                       انشاء كلمه مرور جديدة
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
