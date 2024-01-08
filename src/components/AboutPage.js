import React from "react";
import "./css/AboutPage.css";
import chanelImage1 from "./assets/images/about/image-1.jpg";
import chanelImage2 from "./assets/images/about/image-2.jpg";
import chanelImage3 from "./assets/images/about/image-3.jpg";
import chanelImage4 from "./assets/images/about/image-4.jpg";
import TestimonialCarousel from "./TestimonialCarousel";

function AboutPage() {
  return (
    <div>
      <div className="hero bg-light">
        <div className="container text-center py-5">
          <h1 className="display-4">About Lipa Best</h1>
          <p className="lead">
            Learn more about the talented influencer and photographer.
          </p>
        </div>
      </div>
      <div className="bio py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={chanelImage1}
                alt="Lipa Best"
                className="img-fluid mb-4"
              />
            </div>
            <div className="col-md-6">
              <h2>Background</h2>
              <p className="lead">
                Lipa Best was born and raised in Los Angeles, California. She
                has always had a passion for photography and started taking
                pictures when she was just 10 years old.
              </p>
              <p className="lead">
                After graduating from high school, Chanel went on to study
                photography at the University of California, Los Angeles (UCLA).
                She graduated with honors and was immediately recruited by
                several top photography firms.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Interests</h2>
              <p className="lead">
                Chanel's interests include traveling, exploring new cultures,
                and trying new foods. She also enjoys hiking and spending time
                outdoors.
              </p>
              <p className="lead">
                Chanel believes that traveling is essential for her work as a
                photographer, as it allows her to capture unique and
                breathtaking images from around the world.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={chanelImage2}
                alt="Lipa Best"
                className="img-fluid mb-4"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src={chanelImage3}
                alt="Lipa Best"
                className="img-fluid mb-4"
              />
            </div>
            <div className="col-md-6">
              <h2>Achievements</h2>
              <p className="lead">
                Chanel's work has been featured in several publications,
                including National Geographic, The New York Times, and Vogue.
              </p>
              <p className="lead">
                She has won several awards for her photography, including the
                International Photography AwaLipa Best Landscape Photographer
                and the National Geographic Travel Photographer of the Year.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center">
              <h2 className="">Testimonials</h2>
              <TestimonialCarousel />
            </div>
            <div className="col-md-6">
              <img
                src={chanelImage4}
                alt="Lipa Best"
                className="img-fluid mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
