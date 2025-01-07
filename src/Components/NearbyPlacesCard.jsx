import "../Style/NearbyPlacesCard.css";

function NearbyPlacesCard({ place }) {
  return (
    <div className="col-xl-4 col-12 my-4">
      <div className="card mx-auto">
        <div className=" d-flex align-items-center justify-content-end">
          <div className="card-text text-end mt-4">
            <h3>{place.name}</h3>
            <p>{place.map_disc}</p>
          </div>
          <div className="card-image mx-3 mt-3">
            <img src={place.cover_image} alt={place.name} class />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NearbyPlacesCard;
