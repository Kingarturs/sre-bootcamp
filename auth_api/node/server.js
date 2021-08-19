const express = require('express');
const app = express();

import * as routes from './routes';
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
routes.init(app);



export default app;
