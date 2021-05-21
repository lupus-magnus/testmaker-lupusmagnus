const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:5000/exams/",
});

module.exports = api;
