import { BaseInput } from '../../Input';

const CreateNotebook = () => {
  return (
    <div className="create-panel">
      <p>Création de votre nouveau carnet</p>
      <div className="form-group">
        <BaseInput label="Adresse" />
        <BaseInput label="Type" />
        <BaseInput label="Surface en <sup>2</sup>" />
        <BaseInput label="Copropriété" />
        <BaseInput label="Date de construction" />
        <BaseInput label="Etiquette DPE" />
        <BaseInput label="Informations complémentaires" type="textarea" />
        <a href="/payment" className="button bg-pink">
          Payment
        </a>
      </div>
    </div>
  );
};

export default CreateNotebook;
