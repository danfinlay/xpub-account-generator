const HDKey = require('hdkey');
const Wallet = require('ethereumjs-wallet').default;

module.exports = function (xpub, opts = {}) {
  const hdkey = HDKey.fromExtendedKey(xpub);
  const index = 0;

  return {
    next: () => {

      const child =  hdkey.derive(`m/44'/60'/0'/${index}`);
      // console.dir({child: child.toJSON()});
      const wallet = Wallet.fromPublicKey(child._publicKey);
      // console.log(wallet.getAddress());
      index++;
      return wallet.getAddress();

    }
  }
}
