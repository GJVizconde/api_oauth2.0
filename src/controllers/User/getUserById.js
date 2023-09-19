import { User } from '../../db.js';
import axios from 'axios';
import cleanArray from '../../helpers/cleanArray.js';

const getUserById = async (id, source) => {
  const apiUserRaw = [
    (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data,
  ];

  console.log(apiUserRaw);

  const apiUser = cleanArray(apiUserRaw);

  const user = source === 'api' ? apiUser : await User.findByPk(id);

  return user;
};

export default getUserById;
