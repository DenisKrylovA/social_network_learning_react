import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;