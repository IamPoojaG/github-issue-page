import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import IssueRoute from './Routes/issueRoutes.js';
mongoose.set('strictQuery', false);
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/issues', IssueRoute);
app.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Hello, Welcome...' });
});

const PORT = process.env.PORT || 8000;
const CONNECTION_URI = process.env.CONNECTION_URI;

mongoose
  .connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running in: http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(`Error: ${err}, did not connect to database`));
