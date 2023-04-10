const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {

  const name = 'Gorgant';
  const merkleTree = new MerkleTree(niceList);
  const nameIndex = niceList.indexOf(name);
  const proof = merkleTree.getProof(nameIndex);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, { name, proof });

  console.log({ gift });
}

main();