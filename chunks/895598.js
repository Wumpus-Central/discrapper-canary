var i = n(814033),
    r = n(957578).Buffer;
function a(e, t) {
    return r.from(e.toRed(i.mont(t.modulus)).redPow(new i(t.publicExponent)).fromRed().toArray());
}
e.exports = a;
