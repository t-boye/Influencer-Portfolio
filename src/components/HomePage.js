import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./css/HomePage.css";
import Image1 from "./assets/images/featured/image-1.jpg";
import Image2 from "./assets/images/featured/image-2.jpg";
import Image3 from "./assets/images/featured/image-3.jpg";
import Image4 from "./assets/images/featured/image-4.jpg";
import Image5 from "./assets/images/featured/image-5.jpg";
import Image6 from "./assets/images/featured/image-6.jpg";


function HomePage() {
  return (
    <div>
      <div className="hero bg-light">
        <div className="container text-center py-5">
          <h1 className="display-4">WELCOME TO LIPA's BEST PORTFOLIO</h1>
          <p className="lead">
            Discover the best premium images from Lipa Best.
          </p>
          <Link to="/payment">
            <button className="btn btn-primary btn-lg">Get Access Now</button>
          </Link>
        </div>
      </div>
      <div className="about bg-white py-5 justify-content-center">
        <div className="container text-center">
          <h2 className="mb-4">ABOUT LIPA BEST</h2>
          <p className="lead">
            Lipa Best is an experienced influencer and photographer.
          <br /> She
            specializes in capturing stunning images of landscapes,
            architecture, and wildlife.
          </p>
          <p className="lead">
            Lipa has traveled to many countries around the world to capture
            unique and breathtaking images.<br /> Her work has been featured in
            magazines, galleries, and online publications.
          </p>
          <Link to="/about">
            <button className="btn btn-primary">Learn More</button>
          </Link>
        </div>
      </div>
      <div className="gallery bg-light py-5">
        <div className="container">
          <h2 className="mb-4">FEATURED IMAGES</h2>
          <p className="lead">
          Get exclusive access to a curated library of visually breathtaking images, available with your subscription.
          </p>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block "
                src={Image1}
                alt="Premium Image 1"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block "
                src={Image2}
                alt="Premium Image 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                src={Image3}
                alt="Premium Image 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                src={Image4}
                alt="Premium Image 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                src={Image5}
                alt="Premium Image 5"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={Image6}
                alt="Premium Image 6"
              />
            </Carousel.Item>
          </Carousel>
          <Link to="/gallery">
            <button className="btn btn-primary">View More Images</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
