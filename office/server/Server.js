require('dotenv').config();
require('./DB/index');
const express = require('express');
const cors = require('cors');
const App = express();
const port = process.env.PORT || 8000
App.use(cors());
App.use(express.json());

const EmployeesRouter = require('./Routes/employeesRoter');
App.use('/api',EmployeesRouter);
App.listen(port);
