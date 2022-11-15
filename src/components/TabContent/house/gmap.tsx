import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useEffect } from 'react';
import { useContext } from 'react';
import { LocInfo } from '../../../constants';
import { UiContext } from '../../../context/ui';

const GMapPanel = (props: { center: LocInfo }) => {
  const { center } = props;
  const { moveToHousePanel } = useContext(UiContext);

  return (
    <div className="gmap-panel">
      <div className="d-flex align-items-center">
        <img
          src="./images/left-arrow.svg"
          alt="Back to notebook panel"
          onClick={() => {
            moveToHousePanel('notebook-panel'); ///*AIzaSyA6efsb2DZqEr-qzBFBm0LcIvA2oxvB0DU*/
          }}
        />
        <span>Localisation du 2 rue Saint-Antoine</span>
      </div>
      <div className="gmap-content">
        <LoadScript googleMapsApiKey="AIzaSyCLpdZCyYL9I4CkYnf-3qGJO5xyQqF_lYg">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '60vh' }}
            zoom={10}
            center={center}
          />
        </LoadScript>
      </div>
    </div>
  );
};

export default GMapPanel;
