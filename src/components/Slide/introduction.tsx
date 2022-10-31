import "./index.scss";

const IntroductionSlide = () => { 
  return (
    <div className="row align-items-end intro">
      <div className="col-8 text-start">
        <p className="intro-text">Stockez et</p>
        <p className="intro-text">échangez les</p>
        <p className="intro-text">données de vos</p>
        <p className="intro-text">logements</p>
        <p className="button bg-pink">Créez les carnets d'information de vos logements</p>
      </div>
      <div className="col-4">
        <img className="house" src="./images/house.png" alt="" />
      </div>
    </div>
  )
}

export default IntroductionSlide;