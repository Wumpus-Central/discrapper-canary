(t.byteLength = function (e) {
    var t = u(e),
        n = t[0],
        r = t[1];
    return ((n + r) * 3) / 4 - r;
}),
    (t.toByteArray = function (e) {
        var t,
            n,
            a = u(e),
            l = a[0],
            o = a[1],
            c = new i(((l + o) * 3) / 4 - o),
            s = 0,
            d = o > 0 ? l - 4 : l;
        for (n = 0; n < d; n += 4) (t = (r[e.charCodeAt(n)] << 18) | (r[e.charCodeAt(n + 1)] << 12) | (r[e.charCodeAt(n + 2)] << 6) | r[e.charCodeAt(n + 3)]), (c[s++] = (t >> 16) & 255), (c[s++] = (t >> 8) & 255), (c[s++] = 255 & t);
        return 2 === o && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (c[s++] = 255 & t)), 1 === o && ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)), (c[s++] = (t >> 8) & 255), (c[s++] = 255 & t)), c;
    }),
    (t.fromByteArray = function (e) {
        for (var t, r = e.length, i = r % 3, a = [], l = 0, o = r - i; l < o; l += 16383)
            a.push(
                (function (e, t, r) {
                    for (var i, a = [], l = t; l < r; l += 3) (i = ((e[l] << 16) & 16711680) + ((e[l + 1] << 8) & 65280) + (255 & e[l + 2])), a.push(n[(i >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]);
                    return a.join('');
                })(e, l, l + 16383 > o ? o : l + 16383)
            );
        return 1 === i ? a.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + '==') : 2 === i && a.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='), a.join('');
    });
for (var n = [], r = [], i = 'undefined' != typeof Uint8Array ? Uint8Array : Array, a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', l = 0, o = a.length; l < o; ++l) (n[l] = a[l]), (r[a.charCodeAt(l)] = l);
function u(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var n = e.indexOf('=');
    -1 === n && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
}
(r[45] = 62), (r[95] = 63);
