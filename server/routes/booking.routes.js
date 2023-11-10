// Import Vehicle Controller
const VehicleRental = require('../controllers/vehicleRental.controller');

module.exports = (app) => {

    // Test Route
    app.get('/api/bookings/hello', (req, res) => {
        res.json({ message: "hello from booking routes" })
    })

    // Booking Routes
    app.post('/api/bookings', VehicleRental.createBooking);
    app.get('/api/bookings', VehicleRental.allUserBookings);
    app.delete('/api/bookings/delete/:id', VehicleRental.deleteBooking);
}