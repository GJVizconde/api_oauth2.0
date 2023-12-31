import express from 'express';
import morgan from 'morgan';
import mainRouter from './routes/index.js';

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api', mainRouter);

export default app;
