const movieRouter = require('express').Router();
const allCrud = require('../contrrollers/movies-controler')
movieRouter.get('/',allCrud.GetAllMovie);
movieRouter.get('/:id',allCrud.GetByIdMovie);
movieRouter.post('/',allCrud.CreateMovie);
movieRouter.put('/:id',allCrud.UpdateMovie);
movieRouter.delete('/:id',allCrud.DeleteMovie);
module.exports = movieRouter;