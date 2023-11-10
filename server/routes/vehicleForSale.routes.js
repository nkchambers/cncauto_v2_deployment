// Import Vehicle_Rental Controller
const VehicleForSale = require('../controllers/vehicleForSale.controller');

module.exports = (app) => {

    // Test Route
    app.get('/api/vehicles/forSale/hello', (req, res) => {
        res.json({ message: "hello from vehicles for sale routes" })
    })

    // Vehicle For Sale Routes
    // // app.post('/upload-by-link', Place.imageDownloader);
    // // app.post('/upload', (photosMiddleware.array('photos', 100)), Place.imageUpload);
    app.post('/api/vehiclesForSale', VehicleForSale.createVehicleForSale);
    app.get('/api/vehiclesForSale', VehicleForSale.allVehiclesForSale);
    app.get('/api/user-vehiclesForSale', VehicleForSale.userVehiclesForSale);
    app.get('/api/vehiclesForSale/:id', VehicleForSale.oneUserVehicleForSale);
    app.put('/api/vehiclesForSale', VehicleForSale.updateUserVehicleForSale);

}