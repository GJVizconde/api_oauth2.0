import createUser from '../controllers/User/createUser.js';

const createUserHandler = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newUser = await createUser(name, email, phone);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default createUserHandler;
