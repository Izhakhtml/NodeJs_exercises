const express = require('express');
const app = express();
const cors = require('cors');
const moviesRoutes = require('./routes/Movies-routes')
app.use(express.json());
app.use(cors());
app.use('/movies',moviesRoutes);
app.listen(3000);
