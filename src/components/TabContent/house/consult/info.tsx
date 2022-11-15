import { booksGeneralInfoData } from '../../../../mock';
import { NormalInput } from '../../../Input';

const InfoConsultPanel = (props: { bookId: string; categoryId: string }) => {
  const { bookId, categoryId } = props;

  const bookGeneralInfo = booksGeneralInfoData[bookId];

  return (
    <div className="info-panel">
      <NormalInput label="Adresse" value={bookGeneralInfo['address']} />
      <NormalInput label="Type" value={bookGeneralInfo['type']} />
      <NormalInput label="Surface en m^2" value={bookGeneralInfo['surface']} />
      <NormalInput label="Copropriété" value={bookGeneralInfo['corp']} />
      <NormalInput
        label="Date de construction"
        value={bookGeneralInfo['construction_date']}
      />
      <NormalInput
        label="Informations complémentaires"
        type="textarea"
        value={bookGeneralInfo['information']}
      />
    </div>
  );
};
