import './index.scss';

const Connection = () => {
  return (
    <div className="row align-items-end connection">
      <div className="col-8 form">
        <div className="text-start">
          <p>Connexion</p>
          <p>Identifiant Blocksto :</p>
          <input type="text" />
          <p>Mot de passe Blocksto :</p>
          <input type="text" />
          <p>ou</p>
          <a href="/register">Créer un compte</a>
        </div>
        <a href="/" className="button bg-pink" role="button">
          Valider
        </a>
      </div>
      <div className="col-4">
        <img className="house" src="./images/house.png" alt="" />
      </div>
    </div>
  );
};

export default Connection;
