import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Swal from "sweetalert2";
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
  const [placeReviews, setPlaceReviews] = useState([]); // State to hold place reviews
  const [isFavorite, setIsFavorite] = useState(false);
  const [isFavClicked, setIsFavClicked] = useState(false);

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
        setPlaceReviews(response.data.reviews || []); // Set reviews, ensure it's an array
        setIsFavorite(response.data.is_favorite || false);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
        const errorMessage = error.response?.data?.message || "حدث خطأ ما";
        Swal.fire({
          title: "فشل",
          text: errorMessage,
          icon: "error",
          background: "#F9F9F9",
          confirmButtonColor: "#EDB82C",
          confirmButtonText: "حسنا",
        });
      });
  }, [id, token]);

  const handleFav = () => {
    setIsFavClicked(true);
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
        const successMessage = response.data.message;
        Swal.fire({
          title: "تم بنجاح",
          text: successMessage,
          icon: "success",
          background: "#F9F9F9",
          confirmButtonColor: "#EDB82C",
          confirmButtonText: "حسنا",
        });
        setTimeout(() => {
          setIsFavClicked(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
          setIsFavClicked(false);
        }, 1000);
      });
  };

  const renderStars = (rating) => {
    const fullStars =
      typeof rating === "number" && Number.isInteger(rating)
        ? Math.floor(rating)
        : 0;
    const emptyStars = 5 - fullStars;
    return (
      <>
        {Array(fullStars)
          .fill(
            <span className="fa fa-star fs-2" style={{ color: "gold" }}></span>
          )
          .map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        {Array(emptyStars)
          .fill(
            <span className="fa fa-star fs-2" style={{ color: "#ccc" }}></span>
          )
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
            {/* سلايدر الصور */}
            <div className="row">
              <div className="col-12">
                <div
                  id="placeCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {PlaceImages.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <div className="carousel-image-wrapper">
                          <img
                            src={image.image}
                            className="d-block w-100 rounded carousel-image"
                            alt={`Place Image ${index}`}
                          />
                        </div>
                      </div>
                    ))}
                    {PlaceImages.length === 0 && (
                      <div className="carousel-item active">
                        <div className="carousel-image-wrapper">
                          <img
                            src="/path/to/default-image.jpg"
                            className="d-block w-100 rounded carousel-image"
                            alt="Default Place"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  {PlaceImages.length > 1 && (
                    <>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#placeCarousel"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#placeCarousel"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="container my-3">
            <div className="row ">
              <div className="col-xl-6 col-12">
                <div className="place-rating">
                  <div
                    className={`rating-heart my-4 ${
                      isFavClicked ? "fav-clicked" : ""
                    } ${isFavorite ? "favorite" : ""}`}
                    onClick={handleFav}
                  >
                    <i className={`fa fa-heart`}></i>
                  </div>
                  <div className="rating-details text-center">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <div>{renderStars(place.rating)}</div>
                      <p className="rating fs-1 fs-md-4">{place.rating}</p>{" "}
                    </div>
                    <p className="reviews_count fs-6">
                      {place.reviews_count} Reviews
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-12  text-end">
                <div className="place-info">
                  <h3 className="place-name fs-2 fs-md-3 my-4">{place.name}</h3>
                  <div className="place-timing d-flex flex-column align-items-end">
                    <p className="open fs-5 fs-md-6">
                      يفتح الساعه
                      {place.open_at}
                    </p>
                    <p className="close fs-5 fs-md-6">
                      يغلق الساعه
                      {place.close_at}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
