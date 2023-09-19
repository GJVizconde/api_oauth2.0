import { User } from '../../db.js';
import cleanArray from '../../helpers/cleanArray.js';
import axios from 'axios';
import { Op } from 'sequelize';

const searchUserByName = async (name) => {
  const databaseUsers = await User.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });

  const apiUserRaw = (
    await axios.get('https://jsonplaceholder.typicode.com/users/')
  ).data;

  console.log(apiUserRaw);

  const apiUsers = cleanArray(apiUserRaw);

  const filteredApi = apiUsers.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  return [...filteredApi, ...databaseUsers];
};

export default searchUserByName;
