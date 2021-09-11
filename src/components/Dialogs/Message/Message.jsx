import React from 'react';
import s from './Message.module.css';

// TODO: расположить сообщения поочередно, справа наши сообщения, а слева собеседника

const Message = (props) => {
    return (
            <div className={s.message}>{props.message}</div>
    );
}

export default Message;