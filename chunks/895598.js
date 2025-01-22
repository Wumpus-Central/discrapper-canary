var i = r(814033),
    a = r(957578).Buffer;
function o(e, n) {
    return a.from(e.toRed(i.mont(n.modulus)).redPow(new i(n.publicExponent)).fromRed().toArray());
}
e.exports = o;
