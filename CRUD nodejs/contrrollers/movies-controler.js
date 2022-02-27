const fs = require('fs');
//! GET
const GetAllMovie = (req, res) => {
    const moviesData = require('../movies.json');
    res.send(moviesData)
}
//! GET BY ID
const GetByIdMovie = (req, res) => {
    const moviesData = require('../movies.json');
    const movie = moviesData.find(item => item.id == req.params.id)
    res.send( movie );
}
//! POST
const CreateMovie = (req, res) => {
    const moviesData = require('../movies.json');
    const movie = req.body;
    const movies = [];
    movies.push(...moviesData, movie)
    fs.writeFile('./movies.json', `${JSON.stringify(movies)}`, () => { })
    res.send("Added successfully");
}
//! UPDATE
const UpdateMovie = (req, res) => {
    let moviesData = require('../movies.json');
    let movie = moviesData.find(item => item.id == req.params.id)
    moviesData[moviesData.indexOf(movie)].id = moviesData[moviesData.indexOf(movie)].id
    moviesData[moviesData.indexOf(movie)].writer = req.body.writer
    moviesData[moviesData.indexOf(movie)].rating = req.body.rating
    moviesData[moviesData.indexOf(movie)].movieName = req.body.movieName
    fs.writeFile('./movies.json',`${JSON.stringify(moviesData)}`,()=>{})
    res.send("Updated successfully");
}
//! DELETE
const DeleteMovie = (req, res) => {
    const moviesData = require('../movies.json');
    const movie = moviesData.find(item => item.id == req.params.id);
    moviesData.splice(moviesData.indexOf(movie),1)
    fs.writeFile('./movies.json',`${JSON.stringify(moviesData)}`,()=>{})
    res.send("Deleted successfully");
}
module.exports = {GetAllMovie,GetByIdMovie,CreateMovie,UpdateMovie,DeleteMovie}