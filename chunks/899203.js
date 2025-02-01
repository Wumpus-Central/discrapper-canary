var t = (function () {
    for (var e, t = [], n = 0; n < 256; n++) {
        e = n;
        for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
        t[n] = e;
    }
    return t;
})();
function n(e, n, i, r) {
    var a = t,
        s = r + i;
    e ^= -1;
    for (var o = r; o < s; o++) e = (e >>> 8) ^ a[(e ^ n[o]) & 255];
    return -1 ^ e;
}
e.exports = n;
