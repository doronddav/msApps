const express = require("express");
const server = express();
const cors = require("cors");
server.use(express.json());
server.use(cors());
let port = 8000;

const getDataByEndPoint = require("./express/handlers/getByEndPoint");

// Route for get function by endPoint.
server.get("/dataEndPoint", getDataByEndPoint);

//Turning on the server on port 8000.
server.listen(port, () => console.log(`Express listening on port ${port}`));
