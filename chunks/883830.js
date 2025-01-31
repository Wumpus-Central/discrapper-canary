let i;
n.d(t, { Z: () => a });
let r = new Uint8Array(16);
function a() {
    if (!i && !(i = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    return i(r);
}
