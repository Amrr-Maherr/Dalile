import "../Style/BestRestaurantsCard.css";
import logo from "../Assets/Logo.png"
function BestRestaurantsCard({ restaurant }) {
  return (
    <>
      <div className="BestRestaurantsCard-card mx-auto my-3">
        <div className="BestRestaurantsCard-image">
          <img src={restaurant.cover_image} alt="" />
        </div>
        <div className="BestRestaurantsCard-body text-end mt-3">
          <div className="card-title">
            <h3>{restaurant.name}</h3>
          </div>
          <div className="card-rev d-flex justify-content-end gap-3">
            <div className="text">
              <p>4.7 (5367)</p>
            </div>
            <div className="stars">
              <i className="fa fa-star" style={{ color: "gold" }}></i>
              <i className="fa fa-star" style={{ color: "gold" }}></i>
              <i className="fa fa-star" style={{ color: "gold" }}></i>
              <i className="fa fa-star" style={{ color: "gold" }}></i>
              <i className="fa fa-star" style={{ color: "gold" }}></i>
            </div>
          </div>
          <div className="card-add">
            <p>
              {restaurant.map_disc.slice(0, 10)}
              <i
                className="fa fa-map-marker mx-2"
                style={{ color: "#8B0000" }}
              ></i>
            </p>
          </div>
          <div className="card-sta d-flex justify-content-between">
            <div className="close">
              <p>يغلق الساعة{restaurant.close_at} مساءً</p>
            </div>
            <div className="hr"></div>
            <div className="open">
              <p>{restaurant.status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BestRestaurantsCard;
