import express from 'express';
import bodyParser from 'body-parser';

import addressRouter from './routes/address.js'

const app = express();
const  PORT = 4000;

app.use(bodyParser.json());

app.use('/address', addressRouter)

app.get('/', (req, res) => res.send('haloo'));

app.listen(PORT, () => console.log(`This app running on http://localhost:${PORT}`))