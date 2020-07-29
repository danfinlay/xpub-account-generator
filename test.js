const test = require('tape');
const accountFinder = require('./');

const xPub = 'xpub6EkYiYZdUyAkc8JDJ1ohwusA2Q2QuTXCkPRMf4WNnG9fN8NDko6Mrs2CevDULDFZBPbFJBzhgS9rjrY6CorJyeRDAskmT9xHLGk62cWyyGv';
const mnemonic = 'embark axis now shoot frown good idea eight tool discover work wink';

// Note these accounts are hash-cased:
const accounts = [
  "0xd748eae7EfB3287CBD663bE5344B84A499B4ae8c",
  "0x28c484b64b8176115bE8359C946A871eB58651F9",
  "0x25F75d3b403be42bDe3974FD57Fd68d8573F02B3",
  "0x5cb7A862Fb31a1A07A06546bB681b6198A1d4a09",
  "0xDe685f694b1E39E91e3ef75A88A69ce836114DD4",
];

test('finds the same accounts', (t) => {
  const accountGen = accountFinder(xPub);
  accounts.forEach((account) => {
    const next = accountGen.next();
    t.equal(next, account, 'recovered account ' + account);
  });
  t.end();
})
