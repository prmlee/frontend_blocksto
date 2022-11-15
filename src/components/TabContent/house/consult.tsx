import { useContext } from 'react';
import { UiContext } from '../../../context/ui';
import Pathbar from '../../Others/pathbar';
import CategoryConsultPanel from './consult/category';

const consultContents = {
  category: <CategoryConsultPanel />,
  info: <div>Info</div>,
  docs: <div>Docs</div>,
};

const ConsultPanel = () => {
  const { selectedConsultPanel } = useContext(UiContext);

  return (
    <div className="consult-panel">
      <Pathbar />
      <div className="content">{consultContents[selectedConsultPanel]}</div>
    </div>
  );
};

export default ConsultPanel;
