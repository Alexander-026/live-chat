import { createSlice} from "@reduxjs/toolkit";
import { IMessage } from "../../models/Message";
import { IUser } from "../../models/User";

export interface IChatState {
  joined: boolean;
  roomId: null | string;
  userName: null | string;
  users: IUser[];
  messages: IMessage[];
}



export const initialState:IChatState = {
  joined: false,
  roomId: null,
  userName: 'Alexander',
  users: [],
  messages: [],
}


export const chatSlice = createSlice({
  name: 'live-chat',
  initialState,
  reducers: {}
})

export default chatSlice.reducer;
