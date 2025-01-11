import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import "../Style/HomeStyle.css";
import NearbyPlaces from "./NearbyPlaces";
import NearbyPlacesCard from "../Components/NearbyPlacesCard";
import axios from "axios";
import CategoriesNavigator from "../Components/CategoriesNavigator";
import BestRestaurants from "../Components/BestRestaurants";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";   
import AOS from "aos"; 
import 'animate.css'; // استيراد animate.css
import "aos/dist/aos.css";
import restaurants from "../Assets/restaurant.jpg"
import restaurant2 from "../Assets/restaurant2.jpg";
import Cafe from "../Assets/Cafe.jpg";

function Home() {
  const token = JSON.parse(localStorage.getItem("AuthToken"));
  const [loading, setLoading] = useState(true);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const Navigate = useNavigate();
  const [show, setShow] = useState(true);
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: false });

    if (!token) {
      console.error("Token not found. Please login first.");
      setShow(false);
      return;
    }

    const locationData = {
      longitude: 31.3576615360131,
      latitude: 31.034244338510604,
    };

    const fetchLocationAndPlaces = async () => {
      try {
        // Store location
        await axios.post(
          "https://dalil.mlmcosmo.com/api/store-location",
          locationData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Location stored successfully.");

        // Fetch nearby places
        const response = await axios.post(
          "https://dalil.mlmcosmo.com/api/nearby-places",
          locationData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setNearbyPlaces(response.data);
        setLoading(false);
      } catch (error) {
        console.error(
          "Error with API request:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchLocationAndPlaces();
  }, [token]); // This hook will run when the token changes

  const HandelLogout = () => {
    axios
      .post(
        "https://dalil.mlmcosmo.com/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const successMessage = response.data.message;
        Swal.fire({
          title: "تم تسجيل الخروج بنجاح",
          text: successMessage,
          icon: "success",
          background: "#F9F9F9",
          confirmButtonColor: "#EDB82C",
          confirmButtonText: "حسنا",
        });
        localStorage.removeItem("AuthToken");
        Navigate("/");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
        const errorMessage =
          error.response?.data?.message || "حدث خطأ أثناء تسجيل الخروج.";
        Swal.fire({
          title: "فشل تسجيل الخروج",
          text: errorMessage,
          icon: "error",
          background: "#F9F9F9",
          confirmButtonColor: "#EDB82C",
          confirmButtonText: "حسنا",
        });
      });
  };

  return (
    <>
      <NavBar />
      <section className="Home-section" data-aos="fade-up">
        <div className="container-fluid p-0">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <img src={restaurants} className="d-block w-100" alt="..." />
                <div className="carousel-caption h-100 flex-column d-flex align-items-center justify-content-center">
                  <h5 className="display-5 display-md-4 text-center animate__animated animate__fadeIn animate__delay-1s">
                    استكشف أفضل الكافيهات
                  </h5>
                  <p className="lead lead-sm text-center animate__animated animate__fadeIn animate__delay-2s">
                    اكتشف الأماكن القريبة منك في المنصورة.
                  </p>
                  <button className="btn btn-danger animate__animated animate__zoomIn animate__delay-3s">
                    المزيد
                  </button>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="carousel-item">
                <img src={restaurants} className="d-block w-100" alt="..." />
                <div className="carousel-caption h-100 flex-column d-flex align-items-center justify-content-center">
                  <h5 className="display-5 display-md-4 text-center animate__animated animate__fadeIn animate__delay-1s">
                    قوائم مفضلة
                  </h5>
                  <p className="lead lead-sm text-center animate__animated animate__fadeIn animate__delay-2s">
                    أضف الأماكن المفضلة لسهولة الوصول إليها.
                  </p>
                  <button className="btn btn-success animate__animated animate__zoomIn animate__delay-3s">
                    ابدأ الآن
                  </button>
                </div>
              </div>
              {/* Slide 3 */}
              <div className="carousel-item">
                <img src={restaurant2} className="d-block w-100" alt="..." />
                <div className="carousel-caption h-100 flex-column d-flex align-items-center justify-content-center">
                  <h5 className="display-5 display-md-4 text-center animate__animated animate__fadeIn animate__delay-1s">
                    أنشئ بروفايلك
                  </h5>
                  <p className="lead lead-sm text-center animate__animated animate__fadeIn animate__delay-2s">
                    شارك تقييماتك للمطاعم في المنصورة.
                  </p>
                  <button className="btn btn-warning animate__animated animate__zoomIn animate__delay-3s">
                    اعرف أكثر
                  </button>
                </div>
              </div>
            </div>
            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon text-dark"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <NearbyPlaces />
            </div>
            <div className="col-12">
              <div className="row">
                {loading ? (
                  <div className="loader"></div>
                ) : (
                  <>
                    {nearbyPlaces.map((place, index) => (
                      <div
                        className="col-xl-4 col-12 my-4"
                        key={index}
                        data-aos="fade-up"
                      >
                        <NearbyPlacesCard place={place} />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-5" data-aos="fade-up">
          <CategoriesNavigator />
        </div>
      </section>
      <section>
        <div className="container" data-aos="fade-up">
          <BestRestaurants />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
