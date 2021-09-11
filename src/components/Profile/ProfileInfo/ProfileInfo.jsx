import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div className={s.img}>
        <img src='https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} /><br/>
        
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        
        <span>{props.profile.contacts.github}</span><br/>
        <span>{props.profile.lookingForAJobDescription}</span>
        ava + description TODO: доделать описание
      </div>
    </div>
  );
}

export default ProfileInfo;