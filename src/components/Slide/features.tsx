import Title from '../Others/title';
import './index.scss';

const FeaturesSlide = () => {
  return (
    <div className="features">
      <Title text="Comment cela marche ?" />
      <div className="row">
        <div className="col d-flex flex-row align-items-start">
          <img src="./images/profil.svg" />
          <p>Identifiez-vous</p>
        </div>
        <div className="col d-flex flex-row align-items-start">
          <img src="./images/profil.svg" />
          <p>Créez votre carnet BLOCKSTO</p>
        </div>
        <div className="col d-flex flex-row align-items-start">
          <img src="./images/profil.svg" />
          <p>Stockez et partagez vos informations sans limite</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSlide;
