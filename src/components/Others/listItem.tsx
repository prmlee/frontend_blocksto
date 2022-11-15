import { useContext } from 'react';
import { LocInfo, Notebook } from '../../constants';
import { UiContext } from '../../context/ui';

type NotebookListItemProps = {
  setCenter: (center: LocInfo) => void;
} & Notebook;

export const NotebookListItem = (props: NotebookListItemProps) => {
  const { moveToHousePanel, selectBook, selectCategory } =
    useContext(UiContext);
  const { title, location, to, setCenter } = props;

  return (
    <div className="notebook-list-item">
      <div
        onClick={() => {
          moveToHousePanel('consult-panel');
          selectBook(title);
          selectCategory('');
        }}
      >
        <img src="./images/notebook.svg" alt="go to docments category" />
        <span>{title}</span>
      </div>
      <div>
        <img
          src="./images/pin.svg"
          alt="go to google map"
          onClick={() => {
            moveToHousePanel('gmap-panel');
            setCenter(location);
          }}
        />
        <img src="./images/send.svg" alt="send" />
      </div>
    </div>
  );
};
