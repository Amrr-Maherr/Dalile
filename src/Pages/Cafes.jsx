import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../Style/Cafes.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cafes() {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true); // Properly handle loading state
  const token = JSON.parse(localStorage.getItem("AuthToken"));

  useEffect(() => {
    axios
      .get("https://dalil.mlmcosmo.com/api/cafes", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setCafes(response.data || []); 
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Stop loading in case of an error
      });
  }, [token]); // Empty dependency array ensures the effect runs once on component mount

  return (
    <>
      <NavBar />
      <section className="cafes-section">
        {loading ? (
          <section className="lod">
            <div className="loader"></div>
          </section>
        ) : (
          <div className="cafes-list">
            {cafes.map((cafe) => (
              <Link
                to={`/home/Place-details/${cafe.id}`}
                className="text-decoration-none"
              >
                <div key={cafe.id} className="cafe-card">
                  <img
                    src={cafe.cover_image}
                    alt={cafe.name}
                    className="cafe-image"
                  />
                  <div className="cafe-info">
                    <h5>{cafe.name}</h5>
                    <p>{cafe.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Cafes;
