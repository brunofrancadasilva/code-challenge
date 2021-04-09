const IceCreamRoute = require("../routes/IceCreamRoute");

class APIManager {
  constructor (app) {
    // instantiate routes
    new IceCreamRoute(app);
  }
}

module.exports = APIManager;