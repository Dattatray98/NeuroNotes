import express, { Application, Request, Response } from 'express';
import { AsKToNeo } from './config/NeoModel.config';
import cors from "cors";
import { GetSummary } from './controllers/GetSummary.controller';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World from Express & TypeScript!');
});


app.post("/ask", AsKToNeo);
app.post("/summary", GetSummary);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
