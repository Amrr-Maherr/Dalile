import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import logo from "../Assets/Logo.png";
import "../Style/SinglePlace.css";

function SinglePlace() {
  return (
    <>
      <NavBar />
      <section className="single-place-section py-4 my-5">
        <div className="container my-5">
          {/* قسم الصور */}
          <div className="row">
            <div className="col-lg-6 col-12 mb-4">
              <div className="place-main-image">
                <img
                  src={logo}
                  alt="Main Place"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex flex-wrap">
              <div className="col-md-6 col-12 p-2">
                <div className="place-thumbnail">
                  <img
                    src={logo}
                    alt="Thumbnail 1"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 p-2">
                <div className="place-thumbnail">
                  <img
                    src={logo}
                    alt="Thumbnail 2"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 p-2">
                <div className="place-thumbnail">
                  <img
                    src={logo}
                    alt="Thumbnail 3"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 p-2">
                <div className="place-thumbnail">
                  <img
                    src={logo}
                    alt="Thumbnail 4"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* قسم التقييم والتفاصيل */}
        <div className="container my-5 bg-danger">
          <div className="row">
            <div className="col-xl-6">
              <div className="place-rating">
                <div className="rating-heart">
                  <p>❤️</p>
                </div>
                <div className="rating-details">
                  <p>4.7</p>
                  <p>64,57,342 Reviews</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 text-end">
              <div className="place-info">
                <h3 className="place-name">الراتب الشامى</h3>
                <div className="place-timing">
                  <p>يفتح الساعه 8 صباحا</p>
                  <p>يغلق الساعه 3 مساء</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* قسم الموقع والخريطة */}
        <div className="container my-5">
          <div className="row">
            <div className="col-12 text-end">
              <div className="map-title my-5">
                <h3>الموقع/ الخريطه</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="place-map"></div>
            </div>
          </div>
        </div>

        {/* قسم التقييمات */}
        <div className="container my-5">
          <div className="row">
            <div className="col-12 text-end my-5">
              <div className="reviews-title">
                <h3>التقييمات</h3>
              </div>
              <div className="reviews-list my-5">
                {/* سيتم إضافة التقييمات هنا */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SinglePlace;
