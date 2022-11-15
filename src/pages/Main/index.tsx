import { useContext, useState } from 'react';
import { IconButton, MiniIconButton } from '../../components/Button';
import House from '../../components/TabContent/house';
import Profile from '../../components/TabContent/profile';
import { UiContext } from '../../context/ui';
import './index.scss';

interface TabInterface {
  [key: string]: any;
}

const Main = () => {
  const { selectedHousePanel, moveToHousePanel } = useContext(UiContext);
  const [selectedTab, setSelectedTab] = useState<string>('house');

  const handleTab = (tab: string) => {
    setSelectedTab(tab);
    moveToHousePanel('notebook-panel');
  };

  const tabContents: TabInterface = {
    profile: <Profile />,
    house: <House />,
    envelope: <div>Envelope</div>,
    send: <div>Send</div>,
  };

  return (
    <div className="row main">
      <div className="col-2 tab-header">
        <IconButton
          title="Mon Profil"
          selected={selectedTab === 'profile'}
          src="./images/profile.svg"
          handleClick={() => handleTab('profile')}
        />
        <IconButton
          title="Mes carnets"
          selected={selectedTab === 'house'}
          src="./images/house.svg"
          handleClick={() => handleTab('house')}
        />
        <IconButton
          title="Mes échanges"
          selected={selectedTab === 'envelope'}
          src="./images/envelope.svg"
          handleClick={() => handleTab('envelope')}
        />
      </div>
      <div className="col-8">{tabContents[selectedTab]}</div>
      <div className="col-2">
        <MiniIconButton
          title="Ajouter un document"
          selected={selectedHousePanel === 'add-panel'}
          src="./images/plus.svg"
          handleClick={() => {
            setSelectedTab('house');
            moveToHousePanel('add-panel');
          }}
        />
        <MiniIconButton
          title="Partager un document"
          selected={selectedTab === 'send'}
          src="./images/send.svg"
          handleClick={() => handleTab('send')}
        />
      </div>
    </div>
  );
};

export default Main;
