import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { v4 as uuid } from "uuid";

import classNames from "classnames";
import Button from "../../UI/Button/Button";
import styles from "./ChatContainer.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import socket from "../../../socket";
import { chatSlice } from "../../../store/slices/chatSlice";
import { IMessage } from "../../../models/Message";
import { IUser } from "../../../models/User";
import { updateTyping } from "../../../utils/updateTyping";
const ChatContainer = () => {
  const { messages, fullName, users, roomId, userId } = useAppSelector(
    (state) => state.chat
  );
  const dispatch = useAppDispatch();
  const { setUsers, setMessage } = chatSlice.actions;
  const messageSound = new Audio('/message-sound.mp3')
  const [mesValue, setMesValue] = useState<string>("");

  const messagesListRef = useRef<HTMLUListElement>(null);

  const sendMessage = () => {
   
    if (!!mesValue) {
      const newMessage: IMessage = {
        roomId,
        id: uuid(),
        author: fullName,
        text: mesValue,
        timestamp:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      socket.emit("ROOM:SET_MESSAGE", newMessage);
      const newUsers: IUser[] = updateTyping(users,userId,false)
      dispatch(setMessage({ newMessage, newUsers }));
      socket.emit("ROOM:TYPING", {
        roomId: roomId,
        userId, 
        users: newUsers,
        fullName,
        typing: false,
      });
      setMesValue("");
     
    }
  };

  useEffect(() => {
    if (messagesListRef.current) {
      messagesListRef.current.scrollTo(0, messagesListRef.current.clientHeight);
    }
  }, [messages]);

  useEffect(() => {
    socket.on("ROOM:SET_MESSAGE", (data: IMessage) => {
      dispatch(setMessage({ newMessage: data, newUsers: users }));
      messageSound.play()
    });
    socket.on("ROOM:TYPING", (data: IUser[]) => {
      dispatch(setUsers(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const writeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMesValue(e.target.value);
    const hasMessage = !!e.target.value;
    const newUsers: IUser[] = updateTyping(users,userId,hasMessage)
    dispatch(setUsers(newUsers));
    socket.emit("ROOM:TYPING", {
      roomId,
      userId,
      users: newUsers,
      fullName,
      typing: hasMessage,
    });
  };

  return (
    <div className={styles.container}>
      <ul className={styles.containerList} ref={messagesListRef}>
        {messages.map((message) => (
          <li className={styles.containerListItem} key={message.id}>
            <div
              className={classNames(styles.containerListInnerItem, {
                my: roomId === message.roomId,
              })}
            >
              <div className={styles.containerListItemName}>
                {roomId === message.roomId ? 'My Message' :  message.author}
              </div>
              <p className={styles.containerListItemText}>{message.text}</p>
              <div className={styles.containerListItemTimestamp}>
                {message.timestamp}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.containerEntryField}>
        <textarea
          value={mesValue}
          onChange={writeMessage}
          placeholder="Write a message..."
        />
        <Button
          className={styles.containerSendBtn}
          variant="primary"
          size="small"
          uppercase
          disabled={!mesValue}
          onClick={sendMessage}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatContainer;
