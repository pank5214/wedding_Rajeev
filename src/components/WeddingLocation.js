import React from "react";

const WeddingLocation = () => {
  return (
    <section className="section w-details-area center-text">
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="heading">
              <h2 className="title">Wedding & Reception Details</h2>
              <span className="heading-bottom">
                <i className="icon icon-star"></i>
              </span>
            </div>

            <div className="wedding-details margin-bottom">
              <div className="w-detail right">
                <i className="icon icon-ciurclke"></i>
                <h4 className="title">WEDDING CEREMONY</h4>
                <p>Friday, February 14th, 2025</p>
                <p>Bhanu Banquet Hall, Danapur</p>
                <p>
                  <i className="icon icon-email-plane"></i>
                </p>
                <p>
                  Akhlesh Nagar, Gulzar Bagh, Deep Nagar Chowk, Patna (Bihar)
                </p>
                <p>
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4015.2683428647397!2d85.20175837572106!3d25.59560551544778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5fc5c784f821%3A0xef7f2ce9bf888eeb!2sBhanu%20Banquet%20Hall!5e1!3m2!1sen!2sin!4v1736071817029!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </p>
              </div>

              <div className="w-detail right">
                <i className="icon icon-wine-glass"></i>
                <h4 className="title">DINNER</h4>
                <p>Time: 6 PM Onwards</p>
              </div>

              <div className="w-detail left">
                <i className="icon icon-cake"></i>
                <h4 className="title">RECEPTION PARTY</h4>
                <p>Wednesday, February 19th, 2025</p>
                <p>Vridavan Garden, Mahoba Road</p>
                <p>
                  <i className="icon icon-email-plane"></i>
                </p>
                <p>Opposite Maruti Suzuki Showroom, Chhatarpur (M.P.)</p>
                <p>
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4037.502174273586!2d79.58608797537302!3d24.925085977887118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3982bd641cef881b%3A0x9cfe5bae28e2a468!2sVridavan%20Garden!5e1!3m2!1sen!2sin!4v1736072465055!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </p>
              </div>

              <div className="w-detail left">
                <i className="icon icon-wine-glass"></i>
                <h4 className="title">DINNER</h4>
                <p>Time: 6 PM Onwards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingLocation;
