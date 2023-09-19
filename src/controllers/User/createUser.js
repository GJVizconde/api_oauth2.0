import { User } from '../../db.js';

const createUser = async (name, email, phone) =>
  await User.create({ name, email, phone });

export default createUser;
