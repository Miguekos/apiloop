'use strict';
const express = require('express')
module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  // router.get('/', server.loopback.status());

  const publicRoot = '/laragon/www/vueadminfront/dist'
  router.use(express.static(publicRoot))
  router.get("/", (req, res, next) => {
    res.sendFile("index.html", {
      root: publicRoot
    })
  })
  server.use(router);
};
