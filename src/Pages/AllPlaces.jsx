import { useEffect, useState } from "react";
import "../Style/AllPlaces.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

function AllPlaces() {
  const [allPlaces, setAllPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = JSON.parse(localStorage.getItem("AuthToken"));

  useEffect(() => {
    axios
      .get("https://dalil.mlmcosmo.com/api/all-places", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAllPlaces(response.data || []); // Set the places data in state
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, [token]);

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h5 className="AllPlaces-title fs-1 fs-md-3 fs-sm-5 text-end my-5">
          اكتشف الأماكن <i className="fa fa-map-marker me-3"></i>
        </h5>

        {loading ? (
          <section className="d-flex justify-content-center">
            <div className="loader"></div>
          </section>
        ) : (
          <>
            {/* الأماكن المميزة */}
            <div className="row">
              {allPlaces.map((place) => (
                <div key={place.id} className="col-md-4 mb-4">
                  <div className="card place-card mx-auto">
                    <img
                      src={place.cover_image}
                      alt={place.name}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{place.name}</h5>
                      <p className="card-text">{place.map_disc}</p>

                      {/* خريطة تفاعلية */}
                      <div className="map-section mb-4">
                        <h6 className="map-title mp-3">الموقع على الخريطة</h6>
                        <iframe
                          src={`https://maps.google.com/maps?q=${place.latitude},${place.longitude}&z=15&output=embed`}
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
                            {place.rating} ({place.reviews_count} reviews)
                          </span>
                        </div>
                        <Link
                          to={`/home/Place-details/${place.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          تفاصيل
                        </Link>
                      </div>
                      <p className="status mt-3">
                        <strong>الحالة:</strong> {place.status}
                      </p>
                      <p className="hours">
                        <strong>الساعات:</strong> {place.open_at} -{" "}
                        {place.close_at}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default AllPlaces;
