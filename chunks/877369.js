(e.byteLength = function (t) {
    var e = u(t),
        n = e[0],
        r = e[1];
    return ((n + r) * 3) / 4 - r;
}),
    (e.toByteArray = function (t) {
        var e,
            n,
            l = u(t),
            a = l[0],
            o = l[1],
            c = new i(((a + o) * 3) / 4 - o),
            s = 0,
            d = o > 0 ? a - 4 : a;
        for (n = 0; n < d; n += 4) (e = (r[t.charCodeAt(n)] << 18) | (r[t.charCodeAt(n + 1)] << 12) | (r[t.charCodeAt(n + 2)] << 6) | r[t.charCodeAt(n + 3)]), (c[s++] = (e >> 16) & 255), (c[s++] = (e >> 8) & 255), (c[s++] = 255 & e);
        return 2 === o && ((e = (r[t.charCodeAt(n)] << 2) | (r[t.charCodeAt(n + 1)] >> 4)), (c[s++] = 255 & e)), 1 === o && ((e = (r[t.charCodeAt(n)] << 10) | (r[t.charCodeAt(n + 1)] << 4) | (r[t.charCodeAt(n + 2)] >> 2)), (c[s++] = (e >> 8) & 255), (c[s++] = 255 & e)), c;
    }),
    (e.fromByteArray = function (t) {
        for (var e, r = t.length, i = r % 3, l = [], a = 0, o = r - i; a < o; a += 16383)
            l.push(
                (function (t, e, r) {
                    for (var i, l = [], a = e; a < r; a += 3) (i = ((t[a] << 16) & 16711680) + ((t[a + 1] << 8) & 65280) + (255 & t[a + 2])), l.push(n[(i >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]);
                    return l.join('');
                })(t, a, a + 16383 > o ? o : a + 16383)
            );
        return 1 === i ? l.push(n[(e = t[r - 1]) >> 2] + n[(e << 4) & 63] + '==') : 2 === i && l.push(n[(e = (t[r - 2] << 8) + t[r - 1]) >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + '='), l.join('');
    });
for (var n = [], r = [], i = 'undefined' != typeof Uint8Array ? Uint8Array : Array, l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', a = 0, o = l.length; a < o; ++a) (n[a] = l[a]), (r[l.charCodeAt(a)] = a);
function u(t) {
    var e = t.length;
    if (e % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var n = t.indexOf('=');
    -1 === n && (n = e);
    var r = n === e ? 0 : 4 - (n % 4);
    return [n, r];
}
(r[45] = 62), (r[95] = 63);
