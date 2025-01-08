import { useEffect, useState } from "react";
import logo from "../Assets/Logo.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "../Style/reviewCard.css";
function ReviewCard() {
  const [showInput, setShowInput] = useState(false);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);
  const [UserInfo, setUserInfo] = useState({});
  const token = JSON.parse(localStorage.getItem("AuthToken"));
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://dalil.mlmcosmo.com/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRatingChange = (e) => setRating(e.target.value);

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment || !image || !rating) {
      Swal.fire({
        icon: "error",
        title: "فشل إضافة التقييم",
        text: "يرجى إضافة تعليق وصورة وتحديد التقييم.",
      });
    } else {
      HandelReview();
    }
  };

const HandelReview = () => {
  const formData = new FormData();

  formData.append("content", comment);
  formData.append("image", image);

  if (!comment || !image || !rating) {
    Swal.fire({
      icon: "error",
      title: "فشل إضافة التقييم",
      text: "يرجى إضافة تعليق وصورة لتقديم التقييم.",
    });
  } else {
    axios
      .post(
        `https://dalil.mlmcosmo.com/api/place/${id}/store-review`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // عرض رسالة السيرفر في التنبيه
        Swal.fire({
          icon: "success",
          title: "تم إضافة التقييم بنجاح",
          text: response.data.message || "شكراً لتقييمك!", // إذا كان هناك رسالة من السيرفر، عرضها هنا
        });
        setShowInput(false)
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "حدث خطأ",
          text: error.response?.data?.message || "حدث خطأ أثناء إرسال التقييم.",
        });
      });
  }
};


  return (
    <div>
      {!showInput && (
        <div className="review-card bg-white p-4">
          <div className="content">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-xl-6 col-12 my-4 review">
                <button onClick={() => setShowInput(true)}>اضف تقييمك</button>
              </div>
              <div className="col-xl-6 col-12 my-4 d-flex align-items-center justify-content-end">
                <div className="user-name text-end">
                  <h3>{UserInfo?.name || "اسم المستخدم"}</h3>
                  <p>{UserInfo?.email || "البريد الإلكتروني غير متوفر"}</p>
                </div>
                <div className="user-img text-end ms-3">
                  <img
                    src={UserInfo?.image}
                    alt="User"
                    className="rounded-circle"
                    width="80"
                    height="80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showInput && (
        <div className="review-card bg-white p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                التقييم
              </label>
              <select
                id="rating"
                className="form-select"
                value={rating}
                onChange={handleRatingChange}
              >
                <option value="">اختر التقييم</option>
                <option value="1">1 ★ - ضعيف</option>
                <option value="2">2 ★★ - متوسط</option>
                <option value="3">3 ★★★ - جيد</option>
                <option value="4">4 ★★★★ - ممتاز</option>
                <option value="5">5 ★★★★★ - رائع</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                التعليق
              </label>
              <textarea
                id="comment"
                className="form-control"
                rows="3"
                value={comment}
                onChange={handleCommentChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                اختر صورة
              </label>
              <input
                type="file"
                id="image"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {image && (
              <div className="mb-3">
                <h5>الصورة المرفوعة:</h5>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded"
                  className="img-fluid"
                />
              </div>
            )}

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-success" >
                ارسال التقييم
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ReviewCard;
