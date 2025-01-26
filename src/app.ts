import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

//parser
app.use(express.json());
app.use(cors());

//routes
app.get('/', getAController);

export default app;