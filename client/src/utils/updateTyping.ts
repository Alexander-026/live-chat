import { IUser } from "../models/User";

export const updateTyping = (
  users: IUser[],
  userId: string,
  typing: boolean
): IUser[] => {
  return users.map((user) =>
    user.id === userId ? { ...user, typing: typing } : { ...user }
  );
};
