var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const bodyParser = require("body-parser");

router.use(bodyParser.json());


/* GET home page. */
router.get('/', function(req, res) {
  res.send({ message: 'Welcome to the Scores server' });
});


// GET all Scores
router.get("/Scores", async (req, res) => {
  try {
      let results = await db('SELECT * FROM Scores');
      let scores = results.data;
      res.send(scores);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

module.exports = router;
