import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.json());

const employees = [
  { id: 1, name: 'John', status: 'Working', img: 'example1' },
  { id: 2, name: 'Jack', status: 'Working', img: 'example2' },
  { id: 3, name: 'Sheli', status: 'Working', img: 'example3' },
  { id: 4, name: 'Eitan', status: 'Working', img: 'example4' },
];

app.get('/users', (req, res) => {
  res.send(employees);
});

app.post('/users/:id', (req, res) => {
  const index = employees.findIndex((obj) => obj.id === +req.params.id);
  employees[index].status = req.body.status;
  res.send(employees);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
