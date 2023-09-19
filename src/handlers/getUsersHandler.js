import getAllUsers from '../controllers/User/getAllUsers.js';
import searchUserByName from '../controllers/User/searchUserByName.js';

const getUsersHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const results = name ? await searchUserByName(name) : await getAllUsers();

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default getUsersHandler;
