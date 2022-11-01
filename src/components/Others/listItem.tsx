import { Notebook } from '../../constants';

export const NotebookListItem = (props: Notebook) => {
  const { title, location, to } = props;

  return (
    <div className="notebook-list-item">
      <div>
        <img src="./images/notebook.svg" alt="" />
        <span>{title}</span>
      </div>
      <div>
        <a href={`https://map.google.com/${location}`}>
          <img src="./images/pin.svg" alt="go to google map" />
        </a>
        <a href={`mail:to//${to}`}>
          <img src="./images/send.svg" alt="send" />
        </a>
      </div>
    </div>
  );
};
