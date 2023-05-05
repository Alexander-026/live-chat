import classNames from "classnames";
import styles from "./Messages.module.scss";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { chatSlice } from '../../../store/slices/chatSlice';
import socket from '../../../socket';
import { IMessage } from '../../../models/Message';
import { IUser } from '../../../models/User';

const Messages = () => {
  const { messages, roomId,users } = useAppSelector((state) => state.chat);
  const messagesListRef = useRef<HTMLUListElement>(null);
  const dispatch = useAppDispatch();
  const { setUsers, setMessage } = chatSlice.actions;
  const messageSound = new Audio("/message-sound.mp3");


  //auto scroll after adding new message
  useEffect(() => {
    if (messagesListRef.current) {
      messagesListRef.current.scrollTo(0, messagesListRef.current.clientHeight);
    }
  }, [messages]);

  // display new messages and show typing users
  useEffect(() => {
    socket.on("ROOM:SET_MESSAGE", (data: IMessage) => {
      dispatch(setMessage({ newMessage: data, newUsers: users }));
      messageSound.play();
    });
    socket.on("ROOM:TYPING", (data: IUser[]) => {
      dispatch(setUsers(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul className={styles.list} ref={messagesListRef}>
      {messages.map((message) => (
        <li className={styles.listItem} key={message.id}>
          <div
            className={classNames(styles.listInnerItem, {
              my: roomId === message.roomId,
            })}
          >
            <div className={styles.listItemName}>
              {roomId === message.roomId ? "My Message" : message.author}
            </div>
            <p className={styles.listItemText}>{message.text}</p>
            <div className={styles.listItemTimestamp}>{message.timestamp}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Messages;
