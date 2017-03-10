'use strict';

const Bluebird = require('bluebird');
const makeRequest = require('request-promise');

exports.bootDroplet = function (dropletId) {
  const options = {
    baseUrl: process.env.DO_BASEURL,
    method: 'POST',
    uri: `droplets/${dropletId}/actions`,
    auth: {
      bearer: process.env.DO_TOKEN
    },
    body: {
      type: 'power_on'
    },
    json: true
  };
  return Bluebird
    .resolve(options)
    .then(makeRequest);
};

exports.shutdownDroplet = function (dropletId) {
  const options = {
    baseUrl: process.env.DO_BASEURL,
    method: 'POST',
    uri: `droplets/${dropletId}/actions`,
    auth: {
      bearer: process.env.DO_TOKEN
    },
    body: {
      type: 'shutdown'
    },
    json: true
  };
  return Bluebird
    .resolve(options)
    .then(makeRequest);
};
