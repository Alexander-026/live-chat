import { useState, useEffect, useCallback } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import {v4 as uuid} from 'uuid';
import styles from "./Form.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {onJoinChat } from '../../../store/slices/chatActions';
import socket from '../../../socket'

import { IJoinedUser, IUser } from "../../../models/User";
import { chatSlice } from "../../../store/slices/chatSlice";

const Form = () => {
  const {loading} = useAppSelector((state) => state.chat)
  const [roomId, setRoomId] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const dispatch = useAppDispatch()
  const { setUsers} = chatSlice.actions
  const disabledSend = !roomId || !fullName


  // Join the room
  const joinToChat =  useCallback(async () => {
    const user:IJoinedUser = {
      id:uuid(), 
      roomId,
      fullName
    }
    await  dispatch(onJoinChat(user))
  }, [dispatch, fullName, roomId]);

  //Update new joined users
  useEffect(() => {
    socket.on("ROOM:SET_USERS", (data:IUser[]) => {
      dispatch(setUsers(data))
    });
  }, [dispatch, setUsers]);

  return (
    <div className={styles.form}>
      <Input
        value={roomId}
        onChange={(value: string) => setRoomId(value)}
        label="RoomID"
        error={!roomId}
      />
      <Input
        value={fullName}
        onChange={(value: string) => setFullName(value)}
        label="Full Name"
        error={!fullName}
      />
      <Button 
        onClick={joinToChat} 
        disabled={disabledSend}
        size="large" 
        variant="primary" 
        uppercase 
        full
      >
       {loading ? 'Connecting...' : 'Connect'}   
      </Button>
    </div>
  );
};

export default Form;
