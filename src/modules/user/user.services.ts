import User from './user.model'
import { UserLogin, UserArgs } from './user.type';

export const login = async ({ username, password }: UserLogin): Promise<User> => {
  const user = await User.findOne({ where: { username, password } });

  if (!user) {
    throw new Error("username or password incorrect");
  }

  return user;
};

export const register = async ({ username, password, name }: UserArgs): Promise<User> => {
  // Find if there is an existing account
  const user = await User.findOne({ where: { username } });

  if (user) {
    throw new Error("username exists");
  }

  const newUser = await User.create({
    name,
    username,
    password,
  });

  return newUser;
};

// const checkExistUser = (username: string) => {

// }