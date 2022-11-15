import { useContext } from 'react';
import { UiContext } from '../../../context/ui';
import { NormalButton } from '../../Button';
import { BaseInput } from '../../Input';
import { BasicDropdown } from '../../Input/dropdown';

const AddPanel = () => {
  const { moveToHousePanel } = useContext(UiContext);

  return (
    <div className="add-panel">
      <BaseInput label="Nom du document" />
      <BaseInput label="Dans quel carnet" />
      <BaseInput label="Catégorie" />
      <BasicDropdown
        label="Dans quel carnet"
        values={['Dans', 'Quel', 'Carnet']}
      />
      <BaseInput label="Informations complémentaires" type="textarea" />
      <BaseInput label="Télécharger un fichier" type="file" />
      <NormalButton title="Valider" handleClick={console.log('where?')} />
    </div>
  );
};

export default AddPanel;
