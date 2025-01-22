let i;
r.d(n, {
    Z: function () {
        return o;
    }
});
let a = new Uint8Array(16);
function o() {
    if (!i && !(i = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    return i(a);
}
