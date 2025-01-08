import { useEffect } from "react";
import "../Style/BestRestaurants.css"
import BestRestaurantsCard from "./BestRestaurantsCard";
import axios from "axios";
import { useState } from "react";

function BestRestaurants() {
  const token = JSON.parse(localStorage.getItem("AuthToken"));
    const [restaurants, setRestaurants] = useState([]);
    const [loading,setLoading] = useState(true)
  useEffect(() => {
    axios
      .get("https://dalil.mlmcosmo.com/api/top-rated-places", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
          setRestaurants(response.data); // Store the response data
          setTimeout(() => {
              setLoading(false);
          },5000)
      })
      .catch((error) => {
          console.log(error);
          setLoading(true)
      });
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row text-end">
          <div className="col-12">
            <div className="BestRestaurants-title">
              <h3>افضل المطاعم</h3>
              <div className="BestRestaurants-hr ms-auto"></div>
              <p>استكشف افضل الاماكن القريبه منك</p>
            </div>
          </div>
        </div>
        <div className="row my-4">
          {loading ? (
            <>
              <div className="loader"></div>
            </>
          ) : (
            <>
              {restaurants.map((restaurant) => (
                <div className="col-xl-4 col-12">
                  <BestRestaurantsCard
                    key={restaurant.id}
                    restaurant={restaurant}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
export default BestRestaurants