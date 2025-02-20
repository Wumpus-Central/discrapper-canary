var r = n(957578).Buffer;
function i(e, t, n) {
    for (var r, i, a, s = -1, l = 8, c = 0; ++s < l; ) (r = e._cipher.encryptBlock(e._prev)), (i = t & (1 << (7 - s)) ? 128 : 0), (c += (128 & (a = r[0] ^ i)) >> s % 8), (e._prev = o(e._prev, n ? i : a));
    return c;
}
function o(e, t) {
    var n = e.length,
        i = -1,
        o = r.allocUnsafe(e.length);
    for (e = r.concat([e, r.from([t])]); ++i < n; ) o[i] = (e[i] << 1) | (e[i + 1] >> 7);
    return o;
}
t.encrypt = function (e, t, n) {
    for (var o = t.length, a = r.allocUnsafe(o), s = -1; ++s < o; ) a[s] = i(e, t[s], n);
    return a;
};
