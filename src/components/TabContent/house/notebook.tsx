import { useContext } from 'react';
import { LocInfo, Notebook } from '../../../constants';
import { UiContext } from '../../../context/ui';
import { NotebookListItem } from '../../Others/listItem';
import './index.css';

const NotebookPanel = (props: {
  data: Notebook[];
  setCenter: (center: LocInfo) => void;
}) => {
  const { moveToHousePanel } = useContext(UiContext);
  const { data, setCenter } = props;

  return (
    <div className="notebook-panel">
      <button
        className="create"
        onClick={() => {
          moveToHousePanel('create-panel');
        }}
      >
        <img src="./images/uncircled-plus.svg" alt="" />
        <span>Créer un carnet</span>
      </button>
      <div className="notebook-list">
        {data.map((notebook, index) => (
          <NotebookListItem
            id={notebook.id}
            title={notebook.title}
            location={notebook.location}
            to={notebook.to}
            key={`notebook-${index}`}
            setCenter={setCenter}
          />
        ))}
      </div>
    </div>
  );
};

export default NotebookPanel;
