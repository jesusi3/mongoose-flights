const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index

}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
}

function create(req, res){
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // if we don't redirect, the new page will be shown
      // with /movies in the address bar
      if (err) return res.redirect('/flights/new');
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}