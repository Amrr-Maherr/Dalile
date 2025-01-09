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
        setRestaurants(response.data)
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
      <div className="container">
        <h2 className="page-title">اكتشف المطاعم المميزة لدينا</h2>
        {loading ? (
          <section className="lod">
            <div className="loader"></div>{" "}
            {/* Show loader during loading state */}
          </section>
        ) : (
          <div className="row">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="col-xl-4 col-lg-6 col-md-6">
                <Link
                  to={`/home/Restaurant-details/${restaurant.id}`}
                  className="text-decoration-none"
                >
                  <div className="place-card mx-auto">
                    <img
                      src={restaurant.cover_image}
                      alt={restaurant.name}
                      className="place-image"
                    />
                    <div className="place-info">
                      <h5>{restaurant.name}</h5>
                      <p>{restaurant.map_disc}</p>{" "}
                      {/* Display restaurant description */}
                      <div className="rating">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <span>
                          {restaurant.rating} ({restaurant.reviews_count}{" "}
                          reviews)
                        </span>
                      </div>
                      <p className="status">
                        <strong>الحالة:</strong> {restaurant.status}
                      </p>
                      <p className="hours">
                        <strong>الساعات:</strong> {restaurant.open_at} -{" "}
                        {restaurant.close_at}
                      </p>
                    </div>
                  </div>
                </Link>
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
