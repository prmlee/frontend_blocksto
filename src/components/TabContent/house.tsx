import { useContext, useEffect, useState } from 'react';
import { LocInfo } from '../../constants';
import { UiContext } from '../../context/ui';
import { notebooksData } from '../../mock';
import { SearchInput } from '../Input/search';
import AddPanel from './house/add';
import ConsultPanel from './house/consult';
import CreateNotebookPanel from './house/create';
import GMapPanel from './house/gmap';
import NotebookPanel from './house/notebook';

const House = () => {
  const { selectedHousePanel } = useContext(UiContext);
  const [selectedCenter, setSelectedCenter] = useState<LocInfo>({
    lat: 35.5496939,
    lng: -120.7060049,
  });

  const renderPanels: { [key: string]: any } = {
    'notebook-panel': (
      <NotebookPanel data={notebooksData} setCenter={setSelectedCenter} />
    ),
    'create-panel': <CreateNotebookPanel />,
    'gmap-panel': <GMapPanel center={selectedCenter} />,
    'add-panel': <AddPanel />,
    'consult-panel': <ConsultPanel />,
  };

  return (
    <div className="house">
      <SearchInput />
      <div className="control-panel">{renderPanels[selectedHousePanel]}</div>
    </div>
  );
};

export default House;
