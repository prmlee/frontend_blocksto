import AboutSlide from "../../components/Slide/about";
import FeaturesSlide from "../../components/Slide/features";
import IntroductionSlide from "../../components/Slide/introduction";
import "./index.scss";

const Welcome = () => { 
  return (
    <div id="welcome-carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#welcome-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#welcome-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#welcome-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="100000">
          <IntroductionSlide/>
        </div>
        <div className="carousel-item">
          <AboutSlide/>
        </div>
        <div className="carousel-item">
          <FeaturesSlide/>
        </div>
      </div>
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#welcome-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#welcome-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
    
  )
}

export default Welcome;