const NodeGeocoder = require("node-geocoder");

const opts = {
  provider: 'mapquest',
  httpAdapter: "https",
  apiKey: "aGhtvufecqm0HV01tEEzp5IUeORkolBf",
  formatter: null
};

const geocoder = NodeGeocoder(opts);

module.exports = geocoder;
