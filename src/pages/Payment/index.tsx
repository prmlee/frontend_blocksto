import { DetailedInput } from '../../components/Input';
import './index.css';

const Payment = () => {
  return (
    <div className="payment">
      <p>Payement de votre carnet Blocksto</p>
      <div className="panel">
        <div className="d-flex flex-column align-items-start">
          <div className="d-flex align-items-center">
            <img
              className="credit-card-icon"
              src="./images/credit-card.svg"
              alt=""
            />
            <span>Carte bancaire</span>
          </div>
          <p>*Tous les champs doivent être remplis</p>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <DetailedInput
                label="Numéro de carte bancaire"
                detail="Exemple : 5071 0032 2000 8301 (10 à 19 chiffres)"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <DetailedInput
                label="Date d'expiration"
                detail="Exemple : 12/02 (MM/AA)"
              />
            </div>
            <div className="col-4">
              <DetailedInput
                label="Code de sécurité"
                detail="Exemple : 236 (3 ou 4 chiffres)"
              />
            </div>
          </div>
          <div className="d-flex agreement">
            <input type="checkbox" />
            <span>
              J'ai pris connaissance des conditions ci-après et je les accepte
            </span>
          </div>
          <p>Conditions générales de vente Blocksto</p>
          <a className="button bg-pink" href="/main" role="button">
            Payer 50€
          </a>
        </div>
        <p>
          Votre payement est sécurisé, vous pouvez effectuer votre achat en
          toute sécurité
        </p>
      </div>
    </div>
  );
};

export default Payment;
