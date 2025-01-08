import { useState } from "react";
import "../Style/ProfileCard.css";
import axios from "axios";
import Swal from "sweetalert2"; // استيراد sweetalert2

function ProfileCard({ name, email, phone }) {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState(name || "");
  const [userEmail, setUserEmail] = useState(email || "");
  const [userPhone, setUserPhone] = useState(phone || "");
  const [userImage, setUserImage] = useState("");
  const token = JSON.parse(localStorage.getItem("AuthToken"));
  const handleUpdateProfile = () => {
    const formData = new FormData();
    formData.append("name", userName);
    formData.append("phone", userPhone);
    formData.append("email", userEmail);
    if (userImage) formData.append("image", userImage);

    // التحقق من وجود جميع البيانات المطلوبة
    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("phone")
    ) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "يرجى ملء جميع الحقول",
      });
    }

    axios
      .post("https://dalil.mlmcosmo.com/api/update-profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.message);
        Swal.fire({
          icon: "success",
          title: "تم التحديث بنجاح",
          text: response.data.message || "تم تحديث بياناتك بنجاح!",
        });
      })
      .catch((error) => {
        // عرض تنبيه فشل في حال حدوث خطأ
        Swal.fire({
          icon: "error",
          title: "فشل التحديث",
          text:
            error.response?.data?.message ||
            "حدث خطأ أثناء التحديث. حاول مرة أخرى.",
        });
      });
  };

  return (
    <>
      {show ? (
        // حالة التعديل (نموذج لإدخال البيانات الجديدة)
        <div className="profile-card p-4">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-xl-12 text-end">
              <button
                className="upDateButton"
                onClick={() => {
                  setShow(!show);
                  handleUpdateProfile(); // استدعاء دالة التحديث عند الحفظ
                }}
              >
                حفظ <i className="fa fa-save ms-3"></i>
              </button>
            </div>
            <div className="col-xl-12">
              <form>
                <div className="form-group text-end my-3">
                  <label htmlFor="name">الاسم بالكامل</label>
                  <input
                    type="text"
                    className="form-control text-end"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group text-end my-3">
                  <label htmlFor="email">الايميل</label>
                  <input
                    type="email"
                    className="form-control text-end"
                    id="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
                <div className="form-group text-end my-3">
                  <label htmlFor="phone">رقم الهاتف</label>
                  <input
                    type="text"
                    className="form-control text-end"
                    id="phone"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                  />
                </div>
                <div className="form-group text-end my-3">
                  <label htmlFor="image">صورة الملف الشخصي</label>
                  <input
                    type="file"
                    className="form-control text-end"
                    id="image"
                    accept="image/*"
                    onChange={(e) => setUserImage(e.target.files[0])}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        // حالة العرض (عرض البيانات)
        <div className="profile-card p-4">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-xl-6">
              <button
                className="upDateButton"
                onClick={() => {
                  setShow(!show);
                }}
              >
                تعديل <i className="fa fa-pencil ms-3"></i>
              </button>
            </div>
            <div className="col-xl-6 text-end">
              <h5>
                الاسم بالكامل <i className="fa fa-user"></i>
              </h5>
              <p>{userName || "لا يوجد اسم"}</p>
              <h5>
                الايميل <i className="fa fa-envelope"></i>
              </h5>
              <p>{userEmail || "لا يوجد بريد إلكتروني"}</p>
              <h5>
                رقم الهاتف <i className="fa fa-phone"></i>
              </h5>
              <p>{userPhone || "لا يوجد رقم هاتف"}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileCard;
