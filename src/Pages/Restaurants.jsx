import { useEffect, useState } from "react";
import "../Style/Restaurants.css"; // تأكد من أنك تستخدم ملف CSS المناسب
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // Handle loading state
  const token = JSON.parse(localStorage.getItem("AuthToken"));

  useEffect(() => {
    axios
      .get("https://dalil.mlmcosmo.com/api/restaurants", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setRestaurants(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Stop loading on error
      });
  }, [token]);

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h5 className="AllRestaurants-title fs-1 fs-md-3 fs-sm-5 text-end my-5 d-flex justify-content-end align-items-center">
          اكتشف الاماكن المناسبة
          <i className="fa fa-map-marker ms-2 icon-color"></i>
        </h5>

        {loading ? (
          <section className="d-flex justify-content-center">
            <div className="loader"></div>
          </section>
        ) : (
          <div className="row">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="col-md-4 mb-4">
                <div className="card place-card mx-auto">
                  <img
                    src={restaurant.cover_image}
                    alt={restaurant.name}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text">{restaurant.map_disc}</p>

                    {/* خريطة تفاعلية */}
                    <div className="map-section mb-4">
                      <h6 className="map-title">الموقع على الخريطة</h6>
                      <iframe
                        src={`https://maps.google.com/maps?q=${restaurant.latitude},${restaurant.longitude}&z=15&output=embed`}
                        width="100%"
                        height="200"
                        frameBorder="0"
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "8px",
                        }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                      ></iframe>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="rating">
                        <span className="stars">⭐⭐⭐⭐⭐</span>
                        <span>
                          {restaurant.rating} ({restaurant.reviews_count}{" "}
                          reviews)
                        </span>
                      </div>
                      <Link
                        to={`/home/Place-details/${restaurant.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        تفاصيل
                      </Link>
                    </div>
                    <p className="status mt-3">
                      <strong>الحالة:</strong> {restaurant.status}
                    </p>
                    <p className="hours">
                      <strong>الساعات:</strong> {restaurant.open_at} -{" "}
                      {restaurant.close_at}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Restaurants;
