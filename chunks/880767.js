var i = n(957578).Buffer;
function r(e, t, n) {
    for (var i, r, s, o = -1, l = 8, u = 0; ++o < l; ) (i = e._cipher.encryptBlock(e._prev)), (r = t & (1 << (7 - o)) ? 128 : 0), (u += (128 & (s = i[0] ^ r)) >> o % 8), (e._prev = a(e._prev, n ? r : s));
    return u;
}
function a(e, t) {
    var n = e.length,
        r = -1,
        a = i.allocUnsafe(e.length);
    for (e = i.concat([e, i.from([t])]); ++r < n; ) a[r] = (e[r] << 1) | (e[r + 1] >> 7);
    return a;
}
t.encrypt = function (e, t, n) {
    for (var a = t.length, s = i.allocUnsafe(a), o = -1; ++o < a; ) s[o] = r(e, t[o], n);
    return s;
};
