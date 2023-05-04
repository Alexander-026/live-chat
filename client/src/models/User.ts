export interface IUser {
  id:string;
  // joined: boolean;
  // roomId: string;
  fullName:string;
  typing:boolean;
}

export interface IJoinedUser {
  id:string;
  roomId: string;
  fullName:string;
}