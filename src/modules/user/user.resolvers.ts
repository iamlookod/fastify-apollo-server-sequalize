
import { listUsers } from './user.services'
const resolvers = {
  Query: {
    users: listUsers,
    user: (_parent: any, args: any) => args,
  },
};

export default resolvers;
