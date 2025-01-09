import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import axios from "axios";
import "../Style/Favorites.css"; // افترض أن هذه هي الطريقة لإضافة تنسيق خاص بالصفحة
import { Link } from "react-router-dom";

function Favorites() {
  const token = JSON.parse(localStorage.getItem("AuthToken"));
  const [FavoritePlaces, setFavoritePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      axios
        .get("https://dalil.mlmcosmo.com/api/favorites", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setFavoritePlaces(response.data.data); // بيانات الأماكن المفضلة
          setIsLoading(false); // قم بتحديث حالة التحميل
        })
        .catch((error) => {
          console.log("Error: ", error); // في حالة حدوث خطأ
          setError("حدث خطأ أثناء جلب البيانات. الرجاء المحاولة لاحقًا.");
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const handleRemoveFromFavorites = (placeId) => {
    if (token) {
      axios
        .delete(`https://dalil.mlmcosmo.com/api/favorites/${placeId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          setFavoritePlaces(
            FavoritePlaces.filter((place) => place.id !== placeId)
          );
          alert("تم إزالة المكان من المفضلة.");
        })
        .catch((error) => {
          console.log("Error: ", error);
          setError("حدث خطأ أثناء إزالة المكان من المفضلة.");
        });
    }
  };

  return (
    <>
      <NavBar />
      <section className="favorites-section py-5" dir="rtl">
        <div className="container">
          <h2 className="section-title text-center mb-5 fs-1 fs-md-3 fs-sm-5">أماكنك المفضلة</h2>
          <div className="row">
            {isLoading ? (
              <div className="col-12 text-center">
                <div className="loader"></div>
              </div>
            ) : error ? (
              <div className="col-12 text-center">
                <p className="text-danger">{error}</p>
              </div>
            ) : FavoritePlaces.length > 0 ? (
              FavoritePlaces.map((place) => (
                <div className="col-12 col-md-4 mb-4" key={place.id}>
                  <Link
                    className="text-decoration-none"
                    to={`/home/Place-details/${place.id}`}
                  >
                    <div className="place-card shadow-sm rounded overflow-hidden">
                      <img
                        src={place.cover_image}
                        alt={place.name}
                        className="place-image w-100 h-100 object-cover"
                      />
                      <div className="card-body p-3 text-right">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="place-name">{place.name}</h5>
                          <i
                            className="fa fa-heart"
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() => handleRemoveFromFavorites(place.id)}
                          ></i>
                        </div>
                        <p className="place-description">{place.map_disc}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="place-rating">
                            التقييم:{" "}
                            <span className="text-warning">{place.rating}</span>{" "}
                            ({place.reviews_count} مراجعة)
                          </p>
                          <p className="place-status">
                            <span
                              className={`status-label ${
                                place.status === "مفتوح"
                                  ? "status-open"
                                  : "status-closed"
                              }`}
                            >
                              {place.status}
                            </span>
                          </p>
                        </div>
                        <p className="place-hours">
                          مفتوح من {place.open_at} إلى {place.close_at}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>لا توجد أماكن مفضلة لديك.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Favorites;
