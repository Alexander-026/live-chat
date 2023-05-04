import axios, { AxiosResponse } from "axios";
import { IJoinedUser, IUser } from "../models/User";
import { IMessage } from "../models/Message";

export async function joinUser(user: IJoinedUser) {
  return await axios.post(`/rooms`, user);
}

export async function getRoomData(
  user: IJoinedUser
): Promise<AxiosResponse<{ users: IUser[]; messages: IMessage[] }>> {
  return await axios.get(`/rooms/${user.roomId}`);
}
