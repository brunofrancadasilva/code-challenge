"use strict";

const HttpService = require('../services/HttpService');
const UtilService = require('../services/UtilService');
const { constants: CONSTANTS } = require('../config/config');

class IceCreamController {
  async getShops (paginationParams) {
    const businessesResponse = await HttpService.get(CONSTANTS.yelp.businessesUrl, {
      queryParams: {
        location: 'Alpharetta, GA, US',
        categories: 'icecream',
        sort_by: 'rating',
        limit: parseInt(paginationParams.limit),
        offset: parseInt(paginationParams.offset)
      }
    });
    const businesses = businessesResponse.businesses;

    const responsePromises = businesses.map(async data => {
      // replace url param and make the request
      const reviewRequestUrl = UtilService.replaceStringParams(CONSTANTS.yelp.businessReviewUrl, [data.id]);
      const reviewResponse = await HttpService.get(reviewRequestUrl);

      // get the first review
      const review = reviewResponse.reviews[0];

      return {
        "Business name": data.name,
        "Business address": `${data.location.address1} – ${data.location.city}, ${data.location.state}, ${data.location.zip_code} – ${data.location.country}`,
        "Review": {
          "Person": review.user.name,
          "Text": review.text
        }
      };
    });

    return Promise.all(responsePromises);
  }
}

module.exports = new IceCreamController();