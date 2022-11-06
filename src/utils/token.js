const crypto = require('crypto');

const createToken = () => crypto.randomBytes(8).toString('hex');
console.log(createToken());

module.exports = createToken;