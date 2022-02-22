import { setup, encrypt, decrypt } from 'asherah'

setup({
    kmsType: 'static',
    metastore: 'memory',
    serviceName: 'TestService',
    productId: 'TestProduct',
    verbose: true,
    sessionCache: true})

var data = Buffer.from('mysecretdata', 'utf8');

var encrypted = encrypt('partition', data);
console.log(encrypted);

var decrypted = decrypt('partition', encrypted);

console.log("Decrypted: " + decrypted.toString('utf8'));
