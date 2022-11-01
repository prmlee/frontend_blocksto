import { useState } from 'react';
import { profileElements, ProfileInterface } from '../../constants';
import { ProfileData } from '../../mock';
import { NormalInput } from '../Input';
import './index.scss';

const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileInterface>(ProfileData);

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
