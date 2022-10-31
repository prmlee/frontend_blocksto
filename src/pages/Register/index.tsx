import { BaseInput} from "../../components/Input";
import "./index.scss";

const Register = () => { 
  return (
    <div className="d-flex flex-column align-items-start register">
      <p>Formulaire d'inscription</p>
      <p>*Champs à remplir obligatoirement:</p>
      <BaseInput label="Nom" required/>
      <BaseInput label="Prénom" required/>
      <div className="d-flex flex-row align-items-start w-100">
        <div className="col">
          <BaseInput label="Particulier" required type="checkbox" />
        </div>
        <div className="col">
          <BaseInput label="Professionel" required type="checkbox" />
        </div>
      </div>
      <div className="d-flex flex-row align-items-start w-100">
        <div className="col-5">
          <BaseInput label="Type de logement" type="text" />
        </div>
        <span className="col-1">OU</span>
        <div className="col-6">
          <BaseInput label="Nom de l'entreprise" required type="text" />
        </div>
      </div>
      <BaseInput label="Adresse" required />
      <BaseInput label="Email" required />
      <BaseInput label="Identifiant Blocksto" required />
      <BaseInput label="Mot de passe Blocksto" required />
      <a href="#" className="align-self-center button bg-pink" role="button">Valider</a>
    </div>
  );
}

export default Register;