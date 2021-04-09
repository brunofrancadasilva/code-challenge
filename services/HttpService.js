"use strict";

const axios = require('axios');
const { constants: CONSTANTS } = require('../config/config');

class HttpService {
  constructor () {
    this.defaultHeaders = {
      Authorization: `Bearer ${CONSTANTS.yelp.apiKey}`
    };
  }

  async get (url, options = {}) {
    try {
      const queryParams = options.queryParams;
      const headers = options.headers;

      const response = await axios.get(url, {
        params: queryParams,
        headers: Object.assign(this.defaultHeaders, headers)
      });
      
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new HttpService()