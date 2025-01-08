import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import logo from "../Assets/Logo.png";
import "../Style/SinglePlace.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../Components/reviewCard";

function SinglePlace() {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("AuthToken"));
  const [PlaceImages, setPlaceImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    axios
      .get(`https://dalil.mlmcosmo.com/api/place/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPlaceImages(response.data.images || []);
        setPlace(response.data);
        setIsFavorite(response.data.is_favorite || false); // إضافة التحقق من المفضلة
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, [id, token]);

  const handleFav = () => {
    axios
      .post(
        `https://dalil.mlmcosmo.com/api/favorites/${id}/toggle`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setIsFavorite(!isFavorite);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {Array(fullStars)
          .fill(
            <span className="fa fa-star" style={{ color: "yellow" }}></span>
          )
          .map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        {Array(emptyStars)
          .fill(<span className="fa fa-star" style={{ color: "#ccc" }}></span>)
          .map((star, index) => (
            <span key={index}>{star}</span>
          ))}
      </>
    );
  };

  return (
    <>
      <NavBar />
      {loading ? (
        <section className="lod">
          <div className="loader"></div>
        </section>
      ) : (
        <section className="single-place-section py-4 my-2">
          <div className="container my-2">
            {/* قسم الصور */}
            <div className="row">
              <div className="col-lg-6 col-12 mb-4">
                <div className="place-main-image">
                  {PlaceImages.length > 0 && PlaceImages[0].image ? (
                    <img
                      src={PlaceImages[0].image}
                      alt="Main Place"
                      className="img-fluid rounded"
                    />
                  ) : (
                    <img
                      src="/path/to/default-image.jpg" // صورة افتراضية إذا كانت الصورة غير موجودة
                      alt="Default Place"
                      className="img-fluid rounded"
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-12 d-flex flex-wrap">
                {[1, 2, 3, 4].map((index) => (
                  <div className="col-md-6 col-12 p-2" key={index}>
                    <div className="place-thumbnail">
                      {PlaceImages[index] && PlaceImages[index].image ? (
                        <img
                          src={PlaceImages[index].image}
                          alt={`Thumbnail ${index}`}
                          className="img-fluid rounded"
                        />
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* قسم التقييم والتفاصيل */}
          <div className="container my-3">
            <div className="row">
              <div className="col-xl-6">
                <div className="place-rating">
                  <div className="rating-heart my-4" onClick={handleFav}>
                    <i
                      className={`fa fa-heart ${
                        isFavorite ? "text-danger" : ""
                      }`}
                    ></i>
                  </div>
                  <div className="rating-details text-center">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <div>{renderStars(place.rating)}</div>
                      <p className="rating fs-1 fs-md-4">{place.rating}</p>{" "}
                    </div>
                    <p className="reviews_count fs-6">
                      {place.reviews_count} Reviews
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 text-end">
                <div className="place-info">
                  <h3 className="place-name fs-2 fs-md-3 my-4">{place.name}</h3>
                  <div className="place-timing">
                    <p className="open fs-5 fs-md-6">
                      يفتح الساعه {place.open_at}{" "}
                      <i className="fa fa-clock"></i>
                    </p>
                    <p className="close fs-5 fs-md-6">
                      يغلق الساعه {place.close_at}{" "}
                      <i className="fa fa-clock"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* قسم الموقع والخريطة */}
          <div className="container my-3">
            <div className="row">
              <div className="col-12 text-end">
                <div className="map-title my-5">
                  <h3 className="fs-4 fs-md-5">الموقع/ الخريطه</h3>{" "}
                </div>
              </div>
              <div className="col-12">
                <div className="place-map">
                  <iframe
                    src={`https://maps.google.com/maps?q=${place.latitude},${place.longitude}&z=15&output=embed`}
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 text-end my-3">
                <h3>التقييمات</h3>
              </div>
              <div className="col-12">
                <ReviewCard />
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}

export default SinglePlace;
