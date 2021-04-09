class BaseRoute {
  constructor (app) {
    this.app = app;
  }

  get (params) {
    const successCode = 200;

    if (!params.path || typeof params.path != 'string') {
      throw new Error(`Missing 'path', or type of 'path' is not supported for API mapping. Please check your API mapping.`);
    } else if (!params.handler || typeof params.handler != 'function') {
      throw new Error(`Missing 'handler' on API mapping. Please check your API mapping for path '${params.path}'.`);
    }
    
    // register api
    this.app.get(params.path, this._wrapper(params.handler, successCode));
  }

  _wrapper (handler, httpSuccessCode) {
    return function (req, res) {
      const successCode = httpSuccessCode || 200;
      let promise;

      try {
        // wrap response into a promise
        promise = new Promise(resolve => {
          resolve(handler.apply(handler, arguments))
        });
      } catch (error) {
        res.status(500).json(error);
      }

      if (promise) {
        promise.then(response => {
          res.status(successCode).json(response);
        }).catch(e => {
          res.status(500).send(e.message);
        })
      } else {
        res.status(500).send('Request failed');
      }
    }
  }
}

module.exports = BaseRoute;