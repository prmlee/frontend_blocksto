import "./header.scss";

const Header = () => { 
  return (
    <div className="row align-items-center">
      <div className="col">
        <a href="/" className="d-flex align-items-center">
          <img src="./images/logo.png" />
          <span className="logo-text">BLOCKSTO</span>
        </a>
      </div>
      <div className="col d-flex justify-content-end">
        <a href="/" className="button">Accueil</a>
        <a href="/connection" className="button bg-pink" role="button">Connexion</a>
      </div>
    </div>
  );
}

export default Header;