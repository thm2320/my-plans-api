import bodyParser from 'body-parser';
import express from 'express';
import mongoose from "mongoose"
import dotenv from "dotenv";

import tasksRoutes from './routes/tasksRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use('/tasks', tasksRoutes);

app.get('/healthCheck', (req, res) => res.send('Server is running'))

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.ixc3f.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(PORT);
    console.log(`Server is running in port ${PORT}`);
  })
  .catch(err => console.log(err));