const fetch = require("node-fetch");

async function getDataByEndPoint(req, res) {
  //this fethc will get the data from the Pixabay API. it will store as data on local API. 'node-fetch'
  const url = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${req.headers.q}`;
  const options = {
    method: "GET",
  };
  try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
}
module.exports = getDataByEndPoint;
