import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import CoverImage from "../Assets/profile.png";
import logo from "../Assets/Logo.png";
import "../Style/Profile.css";
import ProfileCard from "../Components/ProfileCard";
import axios from "axios";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const token = JSON.parse(localStorage.getItem("AuthToken"));

  useEffect(() => {
      setInterval(() => {
        axios
          .get("https://dalil.mlmcosmo.com/api/profile", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            setUserData(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching profile:", error);
            setLoading(false);
          });
    },5000)
  }, [token]);

  return (
    <>
      <NavBar />
      {loading ? (
        <section className="lod">
          <div className="loader"></div>
        </section>
      ) : (
        <>
          <section>
            <div className="container my-5">
              <div className="row">
                <div className="col-12">
                  <div>
                    <div className="profile-cover">
                      <img src={CoverImage} alt="Cover" />
                      <div className="Profile-img">
                        <img
                          src={userData.image} // عرض صورة افتراضية إذا لم تكن الصورة موجودة
                          alt="Profile"
                        />
                      </div>
                      <div className="profile-info text-center">
                        <h4>{userData.name || "اسم المستخدم غير متوفر"}</h4>
                        <p>{userData.email || "البريد الإلكتروني غير متوفر"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container margin">
              <div className="row my-5">
                <div className="col-12 text-end">
                  <div className="profile-title">
                    <h3 className="fs-2 fs-md-3 fs-sm-5">الصفحه الشخصيه</h3>
                  </div>
                </div>
                <div className="col-12 my-5">
                  <ProfileCard
                    name={userData.name}
                    email={userData.email}
                    phone={userData.phone}
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <Footer />
    </>
  );
}

export default Profile;
