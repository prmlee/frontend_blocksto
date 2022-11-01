import { Notebook } from '../../../constants';
import { NotebookListItem } from '../../Others/listItem';
import './index.css';

const NotebookPanel = (props: {
  data: Notebook[];
  handleStats(arg: string): void;
}) => {
  const { data, handleStats } = props;
  return (
    <div className="notebook-panel">
      <button
        className="create"
        onClick={() => {
          handleStats('create-panel');
        }}
      >
        <img src="./images/uncircled-plus.svg" alt="" />
        <span>Créer un carnet</span>
      </button>
      <div className="notebook-list">
        {data.map((notebook, index) => (
          <NotebookListItem
            title={notebook.title}
            location={notebook.location}
            to={notebook.to}
            key={`notebook-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NotebookPanel;
