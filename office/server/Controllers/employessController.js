const employees = require('../Models/EmployeesModle');
const GetAll = async (req, res) => {
    await employees.find()
    .then(result => res.send(result))
    .catch(reject => res.status(404).send({message: reject}))
}
const GetById = async (req, res) => {
    await employees.findById(req.params.id)
    .then(result => res.send(result))
    .catch(reject => res.status(404).send({message: reject}))
}
const Create = async (req, res) => {
    await employees.create(req.body)
    .then(() => res.send("created successfully"))
    .catch(reject => res.status(404).send({message: reject}))
}
const Update = async(req, res) => {
    await employees.findOneAndUpdate(ireq.params.id,req.body)
    .then(() => res.send("updated successfully"))
    .catch(reject => res.status(404).send({message: reject}))
}
const Delete = async (req, res) => {
    await employees.findOneAndDelete(req.params.id)
    .then(()=> res.send("deleted successfully"))
    .catch(()=> res.status(404).send({message: reject}))
}
module.exports = { GetAll, GetById, Create, Update, Delete }
