var i = r(957578).Buffer;
function a(e, n, r) {
    for (var i, a, s, l = -1, u = 8, c = 0; ++l < u; ) (i = e._cipher.encryptBlock(e._prev)), (a = n & (1 << (7 - l)) ? 128 : 0), (c += (128 & (s = i[0] ^ a)) >> l % 8), (e._prev = o(e._prev, r ? a : s));
    return c;
}
function o(e, n) {
    var r = e.length,
        a = -1,
        o = i.allocUnsafe(e.length);
    for (e = i.concat([e, i.from([n])]); ++a < r; ) o[a] = (e[a] << 1) | (e[a + 1] >> 7);
    return o;
}
n.encrypt = function (e, n, r) {
    for (var o = n.length, s = i.allocUnsafe(o), l = -1; ++l < o; ) s[l] = a(e, n[l], r);
    return s;
};
