const _sodium = require('libsodium-wrappers');
var thisKey = null;

module.exports.setKey = async function(key)
{
    thisKey = key;
}


module.exports.decrypt = async function(ciphertext, nonce)
{
    if (thisKey === null)
        throw 'no key';

    /* wacht op reactie van sodium */
    await _sodium.ready;

    return _sodium.crypto_secretbox_open_easy(ciphertext, nonce, thisKey);
}