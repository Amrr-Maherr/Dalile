import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import "../Style/HomeStyle.css";
import NearbyPlaces from "./NearbyPlaces";
import NearbyPlacesCard from "../Components/NearbyPlacesCard";
import axios from "axios";

function Home() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({
    latitude: 31.034244338510604,
    longitude: 31.3576615360131,
  });
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  useEffect(() => {
    const token = "252|ojXK8TnYLRtnQX3WERkm3HPltn6RJBPq0IntDkXW54640e26";
    if (!token) {
      console.error("Token not found. Please login first.");
      return;
    }

    const locationData = {
      longitude: 31.3576615360131,
      latitude: 31.034244338510604,
    };

    axios
      .post("https://dalil.mlmcosmo.com/api/store-location", locationData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Location stored successfully:", response.data);
      })
      .catch((error) => {
        console.error(
          "Error storing location:",
          error.response ? error.response.data : error.message
        );
      });

    axios
      .get("https://dalil.mlmcosmo.com/api/nearby-places", {
        params: {
          latitude: locationData.latitude,
          longitude: locationData.longitude,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setNearbyPlaces(response.data);
        setTimeout(() => {
          setLoading(false);
        },5000)
      })
      .catch((error) => {
        console.error(
          "Error fetching nearby places:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  return (
    <>
      <NavBar />
      <section className="Home-section">
        <div className="container">
          <div className="Hero-content text-center">
            <div className="Hero-title">
              <h1>
                استكشف العالم من حولك بسهولة <br />
                وابتكار
              </h1>
            </div>
            <div className="Hero-buttons">
              <Link to="/register" className="register-btn btn">
                تسجيل
              </Link>
              <Link to="login" className="login-btn btn">
                تسجيل دخول
              </Link>
              <button className="logout-btn btn">تسجيل خروج</button>
            </div>
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
                  <div className="loader"></div> // إظهار اللودر
                ) : (
                  <>
                    {nearbyPlaces.map((place, index) => (
                      <div className="col-xl-4" key={index}>
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
    </>
  );
}

export default Home;
