import { Column, Model, Table, Unique } from "sequelize-typescript";
import { Field, ObjectType } from "type-graphql";
@ObjectType()
@Table({
  tableName: 'user',
  timestamps: true,
  paranoid: true,
})
class User extends Model {
  @Field()
  @Unique
  @Column
  public username!: string;

  @Column
  public password!: string;

  @Field()
  @Column
  public name: string;
}

export default User;
