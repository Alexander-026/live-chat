import { IUser } from './../../models/User';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IJoinedUser } from "../../models/User";
import { getRoomData, joinUser } from "../../api/roomService";
import { IMessage } from '../../models/Message';
import {AnyAsyncThunk, RejectedWithValueActionFromAsyncThunk } from '@reduxjs/toolkit/dist/matchers';
import socket from '../../socket';

type ResponseConnect = 
{users:IUser[], messages:IMessage[],joinedUser:IJoinedUser }




export const onJoinChat = createAsyncThunk(
   'chat/connect',
   async (joinedUser:IJoinedUser, thunkApi):Promise<ResponseConnect | RejectedWithValueActionFromAsyncThunk<AnyAsyncThunk>> => {
      try {
        await joinUser(joinedUser)
         socket.emit("ROOM:JOIN", joinedUser);
        const  {data} = await getRoomData(joinedUser)
        
        return {
          ...data,
          joinedUser
        }
      } catch (error) {
        return  thunkApi.rejectWithValue('Failed to connect to the room !')
      }
   }
)
