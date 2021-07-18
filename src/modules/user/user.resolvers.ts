import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import User from "./user.model";
import { register, login } from './user.services';
import { UserArgs, UserLogin } from "./user.type";


@Resolver(User)
export default class UserResolver {
  @Query(() => User)
  public async userFind(@Arg("username") username: string) {
    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  @Mutation(() => User)
  public async userRegister(@Args() { username, password, name }: UserArgs) {
    return await register({ username, password, name });
  }

  @Query(() => User)
  public async userLogin(@Arg("data") { username, password }: UserLogin) {
    return await login({ username, password });
  }
}
