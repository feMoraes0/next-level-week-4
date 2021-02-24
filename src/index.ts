import 'reflect-metadata';
import './database';
import express from 'express';

const app = express();
const port = 3333;

app.get("/basic", (request, response) => {
  return response.json({message: "Basic route created!"});
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}!`);
});