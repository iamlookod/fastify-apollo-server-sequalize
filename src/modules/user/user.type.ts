import { IsString, Length } from "class-validator";
import { ArgsType, Field, InputType } from "type-graphql";

@ArgsType()
export class UserArgs {
  @Field()
  @IsString()
  public username: string;

  @Field()
  @Length(6, 255)
  public password: string;

  @Field()
  @IsString()
  public name: string;
}

@InputType({ description: "User register data" })
export class UserLogin implements Partial<UserArgs> {
  @Field()
  @IsString()
  public username: string;

  @Field()
  @Length(6, 255)
  public password: string;
}