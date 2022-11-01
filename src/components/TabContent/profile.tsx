import { profileElements } from '../../constants';
import { profileData } from '../../mock';
import { NormalInput } from '../Input';
import './index.scss';

const Profile = () => {
  return (
    <div className="profile">
      <img
        src={profileData['avatar'] || './images/unknown-avatar.jpg'}
        alt=""
      />
      <div className="form-group">
        {profileElements.map((element, index) => (
          <NormalInput
            label={element.label}
            required={element.required}
            value={profileData[element.title] || ''}
            key={`normal-input-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
