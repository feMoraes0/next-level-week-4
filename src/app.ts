import 'reflect-metadata';
import createDatabaseConnection from './database';
import express from 'express';
import routes from './routes';

createDatabaseConnection();
const app = express();

app.use(express.json());
app.use(routes);

export default app;