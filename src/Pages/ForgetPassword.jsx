import SubNav from "../Components/SubNav";
import Swal from "sweetalert2";
import ForgetImage from "../Assets/Forgot password.png";
import "../Style/ForgetPassword.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function ForgetPassword() {
  const [Email, setEmail] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // وقت الأنيميشن
      easing: "ease-in-out", // نوع التوقيت
      once: true, // تطبيق الأنيميشن مرة واحدة فقط
    });
  }, []);

  const HandelForm = (e) => {
    e.preventDefault();
  };

  const HandelSendEmail = () => {
    const Identifier = {
      identifier: Email,
    };
    axios
      .post("https://dalil.mlmcosmo.com/api/forgot-password", Identifier)
      .then((response) => {
        const successMessage = response.data?.message;
        Swal.fire({
          title: "نجاح!",
          text: successMessage,
          icon: "success",
        });

        setEmail("");
        setTimeout(() => {
          Navigate("/verification-code");
        }, 2000);
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
      <div data-aos="fade-right">
        <SubNav />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-12"
              data-aos="fade-right" // تأثير fade-right عند التمرير
            >
              <div className="forgetPassword-image">
                <img src={ForgetImage} alt="" />
              </div>
            </div>
            <div
              className="col-xl-6 col-12 d-flex align-items-center justify-content-end log"
              data-aos="fade-left" // تأثير fade-left عند التمرير
            >
              <div className="forgetPassword-form text-end w-100">
                <div className="form-link">
                  <Link to="/login">
                    الرجوع لتسجيل الدخول{" "}
                    <i className="fa fa-chevron-right mx-2"></i>
                  </Link>
                </div>
                <div
                  className="form-title mt-4"
                  data-aos="fade-up" // تأثير fade-up عند التمرير
                >
                  <h3>هل نسيت كلمه السر؟</h3>
                  <p>
                    أدخل بريدك الإلكتروني أو رقم هاتفك، وسنرسل لك رمز التأكيد
                  </p>
                </div>
                <form className="my-5" onSubmit={HandelForm}>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="أدخل بريدك الإلكتروني"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    data-aos="zoom-in" // تأثير zoom-in عند التمرير
                  />
                </form>
                <div className="form-button w-100">
                  <button
                    className="d-block w-100"
                    onClick={HandelSendEmail}
                    data-aos="zoom-in" // تأثير zoom-in عند التمرير
                  >
                    التالى
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgetPassword;
