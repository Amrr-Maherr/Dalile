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
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const HandelForm = (e) => {
    e.preventDefault();
  };

  const HandelSendEmail = () => {
    const Identifier = {
      identifier: Email,
    };
    if (!Email) {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "من فضلك ادخل بريدك الالكتروني",
      });
    } else {
      axios
        .post("https://dalil.mlmcosmo.com/api/forgot-password", Identifier)
        .then((response) => {
          const successMessage = response.data.message;
          Swal.fire({
            title: "تمت العملية بنجاح",
            text: successMessage,
            icon: "success",
            background: "#F9F9F9",
            confirmButtonColor: "#EDB82C",
            confirmButtonText: "حسنا",
          });
          localStorage.setItem("user", JSON.stringify(Identifier));
          setEmail("");
          setTimeout(() => {
            Navigate("/verification-code");
          }, 2000);
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          Swal.fire({
            icon: "error",
            title: "خطا",
            confirmButtonColor: "#EDB82C",
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
        <div className="container py-4">
          <div className="row">
            <div className="col-xl-6 col-12" data-aos="fade-right">
              <div className="forgetPassword-image">
                <img src={ForgetImage} alt="" />
              </div>
            </div>
            <div
              className="col-xl-6 col-12 d-flex align-items-center justify-content-end log"
              data-aos="fade-left"
            >
              <div className="forgetPassword-form text-end w-100">
                <div className="form-link">
                  <Link to="/login">
                    الرجوع لتسجيل الدخول{" "}
                    <i className="fa fa-chevron-right mx-2"></i>
                  </Link>
                </div>
                <div className="form-title mt-4" data-aos="fade-up">
                  <h3>هل نسيت كلمه السر؟</h3>
                  <p>
                    أدخل بريدك الإلكتروني أو رقم هاتفك، وسنرسل لك رمز التأكيد
                  </p>
                </div>
                <form className="my-5" onSubmit={HandelForm}>
                  <div className="email-container">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="أدخل بريدك الإلكتروني"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      data-aos="zoom-in"
                    />
                    <i className="fa fa-envelope"></i>
                  </div>
                </form>
                <div className="form-button w-100">
                  <button className="d-block w-100" onClick={HandelSendEmail}>
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
