import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../../models/Message";
import { IJoinedUser, IUser } from "../../models/User";
import { onJoinChat } from "./chatActions";

export interface IChatState {
  joined: boolean;
  roomId:  string;
  fullName:  string;
  userId:string;
  users: IUser[];
  messages: IMessage[];
  loading: boolean;
  error: any;
}

export const initialState: IChatState = {
  joined: false,
  roomId: '',
  fullName: "",
  userId: '',
  users: [],
  messages: [],
  loading: false,
  error: null,
};

export const setUsers:CaseReducer<IChatState, PayloadAction<IUser[]>> = (state, action) => {
  state.users = action.payload
}
export const setMessage:CaseReducer<IChatState, PayloadAction<{newMessage:IMessage, newUsers:IUser[]}>> = (state, action) => {
  const {newMessage,newUsers} = action.payload
  state.messages = [...state.messages,newMessage ]
  state.users = newUsers
}
export const chatSlice = createSlice({
  name: "live-chat",
  initialState,
  reducers: {
    setUsers,
    setMessage
  },
  extraReducers(builder) {
    builder.addCase(onJoinChat.pending, (state) => {
      state.error = null;
      state.loading = true;
    })
    builder.addCase(onJoinChat.fulfilled, (state,action:PayloadAction<{users:IUser[], messages:IMessage[], joinedUser: IJoinedUser}>) => {
      const {users,messages,joinedUser} = action.payload
      state.users = users
      state.messages = messages
      state.userId = joinedUser.id
      state.joined = true
      state.roomId = joinedUser.roomId
      state.fullName = joinedUser.fullName
    })
    builder.addCase(onJoinChat.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error
      }
    })
  },
});

export default chatSlice.reducer;
