import SubNav from "../Components/SubNav"
import Swal from "sweetalert2";
import ForgetImage from "../Assets/Forgot password.png"
import "../Style/ForgetPassword.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function ForgetPassword() {
    const [Email, setEmail] = useState("");
    const Navigate = useNavigate()
    const HandelForm = (e) => {
        e.preventDefault()
    }
    const HandelSendEmail = () => {
        const Identifier = {
            identifier: Email
        }
        axios
          .post("https://dalil.mlmcosmo.com/api/forgot-password",Identifier)
            .then((response) => {
             const successMessage = response.data?.message;
            Swal.fire({
                      title: "نجاح!",
                      text: successMessage,
                      icon: "success",
            });
            setEmail("");
                setTimeout(() => {
                    Navigate("/")
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
    }
    return (
      <>
        <SubNav />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-12">
                <div className="forgetPassword-image">
                  <img src={ForgetImage} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-12 d-flex align-items-center justify-content-end">
                <div className="forgetPassword-form text-end w-100">
                  <div className="form-link">
                    <Link to="/login">
                      الرجوع لتسجيل الدخول <i class="fa fa-chevron-right mx-2"></i>
                    </Link>
                  </div>
                  <div className="form-title mt-4">
                    <h3>هل نسيت كلمه السر؟</h3>
                    <p>
                      أدخل بريدك الإلكتروني أو رقم هاتفك، وسنرسل لك رمز التأكيد
                    </p>
                  </div>
                  <form className="my-5" onSubmit={(e)=>{HandelForm(e)}}>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="أدخل بريدك الإلكتروني"
                      onChange={(e)=>{setEmail(e.target.value)}}
                    />
                  </form>
                  <div className="form-button w-100">
                    <button className="d-block w-100" onClick={()=>{HandelSendEmail()}}>التالى</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default ForgetPassword