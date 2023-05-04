import {FC, useState, ChangeEvent} from "react";
import { v4 as uuid } from "uuid";
import Button from "../../UI/Button/Button";
import styles from "./EntryField.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { chatSlice } from "../../../store/slices/chatSlice";
import socket from "../../../socket";
import { IUser } from "../../../models/User";
import { updateTyping } from "../../../utils/updateTyping";
import { IMessage } from "../../../models/Message";
import moment from "moment";
import classNames from "classnames";

type EntryFieldProps = {
  screen: 'desctop' | 'mobile'
}


const EntryField:FC<EntryFieldProps> = ({screen}) => {
  const { fullName, users, roomId, userId } = useAppSelector(
    (state) => state.chat
  );
  const dispatch = useAppDispatch();
  const { setUsers, setMessage } = chatSlice.actions;
  const [mesValue, setMesValue] = useState<string>("");

  const sendMessage = () => {
    if (!!mesValue) {
      const newMessage: IMessage = {
        roomId,
        id: uuid(),
        author: fullName,
        text: mesValue,
        timestamp: moment().format("HH:mm"),
      };
      socket.emit("ROOM:SET_MESSAGE", newMessage);
      const newUsers: IUser[] = updateTyping(users, userId, false);
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

  const writeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMesValue(e.target.value);
    const hasMessage = !!e.target.value;
    const newUsers: IUser[] = updateTyping(users, userId, hasMessage);
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
    <div className={classNames(styles.field, screen)}>
      <textarea
        value={mesValue}
        onChange={writeMessage}
        placeholder="Write a message..."
      />
      <Button
        className={styles.sendBtn}
        variant="primary"
        size="small"
        uppercase
        disabled={!mesValue}
        onClick={sendMessage}
      >
        Send
      </Button>
    </div>
  );
};

export default EntryField;
