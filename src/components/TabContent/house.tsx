import { useEffect, useState } from 'react';
import { notebooksData } from '../../constants';
import { SearchInput } from '../Input/search';
import CreateNotebook from './house/create';
import NotebookPanel from './house/notebook';

const House = () => {
  const [currentStats, setCurrentStats] = useState('notebook-panel');

  const renderPanels: { [key: string]: any } = {
    'notebook-panel': (
      <NotebookPanel data={notebooksData} handleStats={setCurrentStats} />
    ),
    'create-panel': <CreateNotebook />,
  };

  return (
    <div className="house">
      <SearchInput />
      <div className="control-panel">{renderPanels[currentStats]}</div>
    </div>
  );
};

export default House;
