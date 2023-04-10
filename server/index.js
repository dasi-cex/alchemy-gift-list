const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

const MERKLE_ROOT = 'fef2c2ec88583e7cb840023ba7658009fa79ad61b769ae0378f47b8ed2ad6155';

app.post('/gift', (req, res) => {

  const {name, proof} = req.body;

  console.log('Received this name from client', name);
  console.log('Received this proof from client', proof);

  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);

  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
