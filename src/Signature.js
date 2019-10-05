const _sodium = require('libsodium-wrappers');
var thisKey = null;

(async () => {
    /* wacht op reactie van sodium */
    await _sodium.ready;

    thisKey = _sodium.crypto_sign_keypair();
})();


module.exports.sign = async function(msg)
{
    /*wacht op reactie van sodium*/
    await _sodium.ready;
    /* teken het bericht  */
    return _sodium.crypto_sign(msg, thisKey.privateKey);
}

module.exports.verifyingKey = async function()
{
    /* wacht op reactie van sodium */

    await _sodium.ready;
    return thisKey.publicKey;
}