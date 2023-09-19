import { User } from '../../db.js';
import axios from 'axios';
import cleanArray from '../../helpers/cleanArray.js';

const getAllUsers = async () => {
  const databaseUsers = await User.findAll();

  const apiUsersRaw = (
    await axios.get('https://jsonplaceholder.typicode.com/users/')
  ).data;

  const apiUsers = cleanArray(apiUsersRaw);

  return [...databaseUsers, ...apiUsers];
};

export default getAllUsers;
