import "../Style/CategoriesNavigator.css"
function CategoriesNavigator() {
    return (
      <>
        <div className="row d-flex align-items-center justify-content-between text-center">
          <div className="col-xl-6 col-12 my-3">
            <div className="CategoriesNavigator-card f-card">
              <div className="card-content">
                <div className="card-text">
                  <h3>الكافيهات</h3>
                  <p>
                    البحث عن والأماكن و الوجهات الأكثر شعبية <br />
                    لدينا
                  </p>
                </div>
                <div className="card-button">
                  <button>عرض جميع الكافيهات</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12 my-3">
            <div className="CategoriesNavigator-card s-card">
              <div className="card-content">
                <div className="card-text">
                  <h3>المطاعم</h3>
                  <p>
                    البحث عن والأماكن و الوجهات الأكثر شعبية <br />
                    لدينا
                  </p>
                </div>
                <div className="card-button">
                  <button>عرض جميع المطاعم</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default CategoriesNavigator 