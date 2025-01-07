import "../Style/NearbyPlaces.css"
function NearbyPlaces() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-xl-6 col-12 text-start my-4">
                <div className="NearbyPlaces-button">
                  <button>شاهد اماكن اكثر</button>
                </div>
              </div>
              <div className="col-xl-6 col-12 my-4 text-end">
                <div className="NearbyPlaces-title">
                  <h3>استكشف الاماكن القريبه منك</h3>
                  <div className="NearbyPlaces-hr ms-auto"></div>
                  <p>البحث عن الاماكن القريبه والأماكن الأكثر شعبية لدينا</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default NearbyPlaces