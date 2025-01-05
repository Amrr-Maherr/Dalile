import { Link, useNavigate } from "react-router-dom";
import SubNav from "../Components/SubNav";
import "../Style/VerificationCode.css";
import Swal from "sweetalert2";
import ResetImage from "../Assets/reset.png";
import { useEffect, useRef } from "react";
import axios from "axios";

function VerificationCode() {
  const inputOne = useRef();
  const inputTwo = useRef();
  const inputThree = useRef();
  const inputFour = useRef();
  const Navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    useEffect(() => {
      if (userInfo && userInfo.email) {
        console.log(userInfo.email);
      } else {
        console.log("User info or email not found.");
      }
    }, []);

    const HandelResendCode = () => {
        const Email = {
            identifier:userInfo.email
        }
        axios.post("https://dalil.mlmcosmo.com/api/forgot-password", Email).then((response) => {
          const successMessage = response.data?.message;
                        Swal.fire({
                                  title: "نجاح!",
                                  text: successMessage,
                                  icon: "success",
                        });
        }).catch((error) => {
          const errorMessage = error.response?.data?.message;
                        Swal.fire({
                                  icon: "error",
                                  title: "خطأ",
                                  text: errorMessage,
                        });
      })
  }
  const HandelSavCode = () => {
    const codeOne = inputOne.current.value;
    const codeTwo = inputTwo.current.value;
    const codeThree = inputThree.current.value;
    const codeFour = inputFour.current.value;

    // التحقق من المدخلات
    if (
      codeOne === "" ||
      codeTwo === "" ||
      codeThree === "" ||
      codeFour === ""
    ) {
      alert("يرجى إدخال جميع الأرقام.");
    }

    const Code = {
      code: `${codeOne}${codeTwo}${codeThree}${codeFour}`,
    };

    localStorage.setItem("code", JSON.stringify(Code));

    // إعادة تعيين المدخلات
    inputOne.current.value = "";
    inputTwo.current.value = "";
    inputThree.current.value = "";
    inputFour.current.value = "";

    // الانتقال إلى الصفحة التالية (أو الصفحة التي تريدها)
    Navigate("/reset-password");
  };

  return (
    <>
      <SubNav />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-12">
              <div className="VerificationCode-image">
                <img src={ResetImage} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-12 text-end">
              <div className="VerificationCode-link mb-4 mt-5">
                <Link to="/login">
                  الرجوع لتسجيل الدخول
                  <i className="fa fa-chevron-right mx-2"></i>
                </Link>
              </div>
              <div className="VerificationCode-title mb-4">
                <h3>ادخل رمز التحقق</h3>
                <p>دخل الرمز الذي أرسلناه إلى رقمك 7698234***</p>
              </div>
              <div className="VerificationCode-form mb-5">
                <form className="d-flex align-items-center gap-4 justify-content-end">
                  <input type="number" min={0} max={9} ref={inputOne} />
                  <input type="number" min={0} max={9} ref={inputTwo} />
                  <input type="number" min={0} max={9} ref={inputThree} />
                  <input type="number" min={0} max={9} ref={inputFour} />
                </form>
              </div>
              <div className="VerificationCode-button mb-4 w-100">
                <button className="d-block w-100" onClick={HandelSavCode}>
                  التالى
                </button>
              </div>
              <div className="VerificationCode-resend-link text-center">
                <p>
                  لم تتلق الرمز? <Link  onClick={()=>{HandelResendCode()}}>اعاده ارسال</Link>
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
