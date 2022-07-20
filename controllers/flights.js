const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    show,
    create,
}

function index(req, res) {
    Flight.find({}, function(err, flight) {
        res.render('flights/index', {flight});
    });
}

function newFlight(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate });
}

function show(req, res) {
    const id = req.params.id;
    Flight.findById( id , function(err, flight){
        res.render('flights/show', { flight });
    });
}

function create(req, res){
    console.log(req.body);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      };
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // if we don't redirect, the new page will be shown
      // with /movies in the address bar
      if (err) return res.redirect('/flights/new');
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
}
