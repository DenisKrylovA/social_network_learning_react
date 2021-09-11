import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://spidea.net/wp-content/uploads/2020/03/intel.png' />

      <div className={s.loginBlock}>
        {
        props.isAuth ? <div> {props.login} - <button onClick={props.logout} >LogOut</button> </div>
        : <NavLink to='/login'>Login</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;