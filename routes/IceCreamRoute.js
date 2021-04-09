"use strict";

const IceCreamController = require('../controllers/IceCreamController');
const BaseRoute = require('./BaseRoute');

class IceCreamRoute extends BaseRoute {
  constructor (app) {
    super(app);

    this.get({
      path: '/',
      handler: this.getShops.bind(this)
    });
  }

  async getShops (req) {
    const { query: { top = 5, skip = 0 } } = req;

    return IceCreamController.getShops({
      limit: top,
      offset: skip
    });
  }
}

module.exports = IceCreamRoute;