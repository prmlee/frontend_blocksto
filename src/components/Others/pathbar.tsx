import { useContext } from 'react';
import { UiContext } from '../../context/ui';

const Pathbar = () => {
  const { selectedBookTitle, selectedDocumentTitle } = useContext(UiContext);

  return (
    <div className="d-flex align-items-start pathbar">
      {selectedBookTitle !== '' && (
        <div className="d-flex align-items-center">
          <img src="./images/notebook.svg" alt="" />
          <span>{selectedBookTitle}</span>
        </div>
      )}
      {selectedDocumentTitle !== '' && (
        <div>
          <img src="./images/notebook.svg" alt="" />
          <span>{selectedDocumentTitle}</span>
        </div>
      )}
    </div>
  );
};

export default Pathbar;
