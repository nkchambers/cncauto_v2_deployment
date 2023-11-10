// Import Vehicle_Rental Controller
const VehicleRental = require('../controllers/vehicleRental.controller');

module.exports = (app) => {

    // Test Route
    app.get('/api/vehicles/rentals/hello', (req, res) => {
        res.json({ message: "hello from vehicle rental routes" })
    })

    // ------------------------------ VEHICLE RENTAL ROUTES ----------------------------------



    // -------------------- Vehicle Photos Uploader Routes -----------------------

    // // app.post('/upload-by-link', Place.imageDownloader);
    // // app.post('/upload', (photosMiddleware.array('photos', 100)), Place.imageUpload);



    // ------------------------- Vehicle Rental CRUD Routes -----------------------

    // CREATE Vehicle Rental
    app.post('/api/vehicleRentals', VehicleRental.createVehicleRental);
    
    // READ ALL Vehicle Rentals
    app.get('/api/vehicleRentals', VehicleRental.allVehicleRentals);

    // READ ALL USER (ADMIN) Vehicle Rentals
    app.get('/api/user-vehicleRentals', VehicleRental.userVehicleRentals);

    // READ ONE Vehicle Rental
    app.get('/api/vehicleRentals/:id', VehicleRental.oneUserVehicleRental);

    //UPDATE Vehicle Rental
    app.put('/api/vehicleRentals', VehicleRental.updateUserVehicleRental);




    // ------------------------- BROWSE BY EXPERIENCE Vehicle Rental Routes ---------------------------

    // READ ALL Sedan Rentals
    app.get('/api/sedan-vehicleRentals', VehicleRental.allSedanRentals);

    // READ ALL Van Rentals
    app.get('/api/van-vehicleRentals', VehicleRental.allVanRentals);

    // READ ALL Truck Rentals
    app.get('/api/truck-vehicleRentals', VehicleRental.allTruckRentals);

    // READ ALL SUV Rentals
    app.get('/api/suv-vehicleRentals', VehicleRental.allSuvRentals);



    
    // ----------------------------- BROWSE BY CITY Vehicle Rental Routes ------------------------------

    // READ ALL Seattle Rentals
    app.get('/api/seattle-vehicleRentals', VehicleRental.allSeattleRentals);

    // READ ALL Seattle Rentals
    app.get('/api/newYork-vehicleRentals', VehicleRental.allNewYorkRentals);
    
}