const axios = require('axios');

class RequestService {
  static doPost({ path, payload }) {
    return axios.post(
      `http://${process.env.AUTH_HOST}:${process.env.AUTH_PORT}/api/${path}`,
      payload
    );
  }
  static doPatch({ path, payload }) {
    return axios.patch(
      `http://${process.env.AUTH_HOST}:${process.env.AUTH_PORT}/api/${path}`,
      payload
    );
  }
}

module.exports = RequestService;
