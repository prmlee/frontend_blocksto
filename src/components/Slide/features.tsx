import Title from '../Others/title';
import './index.scss';

const FeaturesSlide = () => {
  return (
    <div className="features">
      <Title text="Comment cela marche ?" />
      <div className="row">
        <div className="col d-flex flex-row align-items-start">
          <img src="./images/profile.svg" alt="this is a profile svg" />
          <p>Identifiez-vous</p>
        </div>
        <div className="col d-flex flex-row align-items-start">
          <img src="./images/folder.svg" alt="this is a profile svg" />
          <p>Créez votre carnet BLOCKSTO</p>
        </div>
        <div className="col d-flex flex-row align-items-start">
          <img src="./images/plus.svg" alt="this is a profile svg" />
          <p>Stockez et partagez vos informations sans limite</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSlide;
