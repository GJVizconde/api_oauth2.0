import { Router } from 'express';
import getUsersHandler from '../../handlers/getUsersHandler.js';
import getUserHandler from '../../handlers/getUserHandler.js';
import createUserHandler from '../../handlers/createUserHandler.js';

const userRouter = Router();

userRouter.get('/', getUsersHandler);

userRouter.get('/:id', getUserHandler);

userRouter.post('/', createUserHandler);

userRouter.put('/:id', (req, res) => {
  res.status(200).json('NYI: Actualizar usuario');
});

userRouter.patch('/:id', (req, res) => {
  res.status(200).json('NYI:Actualizar usuario por propiedad');
});

userRouter.delete('/:id', (req, res) => {
  res.status(200).json('NYI:Eliminar usuario');
});

export default userRouter;
