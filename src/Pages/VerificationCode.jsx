import { Link, useNavigate } from "react-router-dom";
import SubNav from "../Components/SubNav";
import "../Style/VerificationCode.css";
import Swal from "sweetalert2";
import ResetImage from "../Assets/reset.png";
import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function VerificationCode() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");
  const [inputFour, setInputFour] = useState("");
  const navigate = useNavigate();
  const email = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleResendCode = () => {
    const Email = { identifier: email };
    axios
      .post("https://dalil.mlmcosmo.com/api/forgot-password", Email)
      .then((response) => {
        Swal.fire({
          title: "نجاح!",
          text: response.data.message,
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: error.response.data.message || "حدث خطأ ما",
        });
      });
  };

  const handleSaveCode = () => {
    if (!inputOne || !inputTwo || !inputThree || !inputFour) {
      Swal.fire({
        icon: "warning",
        title: "تحذير",
        text: "يرجى إدخال جميع الأرقام.",
      });
      return;
    }

    const code = `${inputOne}${inputTwo}${inputThree}${inputFour}`;
    axios
      .post("https://dalil.mlmcosmo.com/api/verify-code", {
        identifier: email,
        code,
      })
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
        localStorage.setItem("code", JSON.stringify(code));
        navigate("/reset-password")
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
    setInputOne("");
    setInputTwo("");
    setInputThree("");
    setInputFour("");
  };

  return (
    <>
      <div data-aos="fade-right">
        <SubNav />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-12" data-aos="fade-right">
              <div className="VerificationCode-image">
                <img src={ResetImage} alt="Reset illustration" />
              </div>
            </div>
            <div className="col-xl-6 col-12 text-end log" data-aos="fade-left">
              <div className="VerificationCode-link mb-4 mt-5">
                <Link to="/login">
                  الرجوع لتسجيل الدخول
                  <i className="fa fa-chevron-right mx-2"></i>
                </Link>
              </div>
              <div className="VerificationCode-title mb-4" data-aos="fade-up">
                <h3>ادخل رمز التحقق</h3>
                <p>دخل الرمز الذي أرسلناه إلى رقمك 7698234***</p>
              </div>
              <div className="VerificationCode-form mb-5 " data-aos="fade-up">
                <form className="d-flex align-items-center  flex-wrap gap-4 justify-content-end">
                  <input
                    type="text"
                    min={0}
                    max={9}
                    value={inputOne}
                    onChange={(e) => setInputOne(e.target.value)}
                    aria-label="Digit 1"
                  />
                  <input
                    type="text"
                    min={0}
                    max={9}
                    value={inputTwo}
                    onChange={(e) => setInputTwo(e.target.value)}
                    aria-label="Digit 2"
                  />
                  <input
                    type="text"
                    min={0}
                    max={9}
                    value={inputThree}
                    onChange={(e) => setInputThree(e.target.value)}
                    aria-label="Digit 3"
                  />
                  <input
                    type="text"
                    min={0}
                    max={9}
                    value={inputFour}
                    onChange={(e) => setInputFour(e.target.value)}
                    aria-label="Digit 4"
                  />
                </form>
              </div>
              <div
                className="VerificationCode-button mb-4 w-100"
                data-aos="fade-up"
              >
                <button className="d-block w-100" onClick={handleSaveCode}>
                  التالى
                </button>
              </div>
              <div className="VerificationCode-resend-link text-center">
                <p>
                  لم تتلق الرمز؟{" "}
                  <Link onClick={handleResendCode}>إعادة الإرسال</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VerificationCode;
