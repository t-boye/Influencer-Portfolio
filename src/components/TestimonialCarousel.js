import React from "react";
import "./css/TestimonialCarousel.css";
function TestimonialCarousel() {
  return (
    <div
      id="testimonial-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#testimonial-carousel"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#testimonial-carousel"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#testimonial-carousel"
          data-bs-slide-to="2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="testimonial">
            <p className="quote">
               Lipa's photography is truly breathtaking. She has an eye for
              capturing the beauty of our world like no one else."
            </p>
            <p className="author">- John Smith, CEO of Ryben Corporation</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="testimonial">
            <p className="quote">
              "Working with Lipa was a pleasure from start to finish. She has
              a great attitude and her professionalism is top-notch."
            </p>
            <p className="author">
              - Jane Doe, Marketing Director at Zedmark Company
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="testimonial">
            <p className="quote">
               Lipa's photography has a unique quality that makes her work
              stand out from the rest. We are proud to have her as a contributor
              to our magazine."
            </p>
            <p className="author">
              - Sarah Johnson, Editor-in-Chief of Coolex Magazine
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#testimonial-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#testimonial-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default TestimonialCarousel;
