import { useEffect, useState } from "react";
import "../Style/AllPlaces.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

function AllPlaces() {
  const [allPlaces, setAllPlaces] = useState([]);
  const [loading,setLodaing] = useState(true)
  const token = JSON.parse(localStorage.getItem("AuthToken"));

  useEffect(() => {
    axios
      .get("https://dalil.mlmcosmo.com/api/all-places", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAllPlaces(response.data.data); // Set the places data in state
        setLodaing(false)
      })
      .catch((error) => {
        console.log(error);
        setLodaing(true);
      });
  }, [token]);

  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="page-title">اكتشف الأماكن المميزة لدينا</h2>{" "}
        {loading ? (
          <>
            <section className="lod">
              <div className="loader"></div>
            </section>
          </>
        ) : (
          <>
            <div className="row">
              {allPlaces.map((place) => (
                <div key={place.id} className="col-xl-4 col-lg-6 col-md-6">
                  <Link
                    to={`/home/Place-details/${place.id}`}
                    className="text-decoration-none"
                  >
                    <div className="place-card mx-auto">
                      <img
                        src={place.cover_image}
                        alt={place.name}
                        className="place-image"
                      />
                      <div className="place-info">
                        <h5>{place.name}</h5>
                        <p>{place.map_disc}</p>
                        <div className="rating">
                          <div className="stars">⭐⭐⭐⭐⭐</div>
                          <span>
                            {place.rating} ({place.reviews_count} reviews)
                          </span>
                        </div>
                        <p className="status">
                          <strong>الحالة:</strong> {place.status}
                        </p>
                        <p className="hours">
                          <strong>الساعات:</strong> {place.open_at} -{" "}
                          {place.close_at}
                        </p>
                      </div>
                    </div>
                  </Link>
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
