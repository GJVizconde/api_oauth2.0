import getUserById from '../controllers/User/getUserById.js';

const getUserHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? 'bdd' : 'api';

  try {
    const user = await getUserById(id, source);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default getUserHandler;
