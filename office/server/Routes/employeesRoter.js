const EmployeesRouter = require('express').Router();
const AllMethodes = require('../Controllers/employessController');
EmployeesRouter.get("/office",AllMethodes.GetAll);
EmployeesRouter.get("/office/:id",AllMethodes.GetById);
EmployeesRouter.post("/office",AllMethodes.Create);
EmployeesRouter.put("/office/:id",AllMethodes.Update);
EmployeesRouter.delete("/office/:id",AllMethodes.Delete);
module.exports = EmployeesRouter;