import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './config';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api', routes);

app.listen(config.port, () =>
  console.log(`⬆️ Server is up and running on port ${config.port}`),
);
