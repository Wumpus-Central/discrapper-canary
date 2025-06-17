(n.byteLength = function (e) {
    var n = c(e),
        t = n[0],
        r = n[1];
    return ((t + r) * 3) / 4 - r;
}),
    (n.toByteArray = function (e) {
        var n,
            t,
            l = c(e),
            o = l[0],
            a = l[1],
            s = new i(((o + a) * 3) / 4 - a),
            u = 0,
            d = a > 0 ? o - 4 : o;
        for (t = 0; t < d; t += 4) (n = (r[e.charCodeAt(t)] << 18) | (r[e.charCodeAt(t + 1)] << 12) | (r[e.charCodeAt(t + 2)] << 6) | r[e.charCodeAt(t + 3)]), (s[u++] = (n >> 16) & 255), (s[u++] = (n >> 8) & 255), (s[u++] = 255 & n);
        return 2 === a && ((n = (r[e.charCodeAt(t)] << 2) | (r[e.charCodeAt(t + 1)] >> 4)), (s[u++] = 255 & n)), 1 === a && ((n = (r[e.charCodeAt(t)] << 10) | (r[e.charCodeAt(t + 1)] << 4) | (r[e.charCodeAt(t + 2)] >> 2)), (s[u++] = (n >> 8) & 255), (s[u++] = 255 & n)), s;
    }),
    (n.fromByteArray = function (e) {
        for (var n, r = e.length, i = r % 3, l = [], o = 0, a = r - i; o < a; o += 16383)
            l.push(
                (function (e, n, r) {
                    for (var i, l = [], o = n; o < r; o += 3) (i = ((e[o] << 16) & 16711680) + ((e[o + 1] << 8) & 65280) + (255 & e[o + 2])), l.push(t[(i >> 18) & 63] + t[(i >> 12) & 63] + t[(i >> 6) & 63] + t[63 & i]);
                    return l.join('');
                })(e, o, o + 16383 > a ? a : o + 16383)
            );
        return 1 === i ? l.push(t[(n = e[r - 1]) >> 2] + t[(n << 4) & 63] + '==') : 2 === i && l.push(t[(n = (e[r - 2] << 8) + e[r - 1]) >> 10] + t[(n >> 4) & 63] + t[(n << 2) & 63] + '='), l.join('');
    });
for (var t = [], r = [], i = 'undefined' != typeof Uint8Array ? Uint8Array : Array, l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', o = 0, a = l.length; o < a; ++o) (t[o] = l[o]), (r[l.charCodeAt(o)] = o);
function c(e) {
    var n = e.length;
    if (n % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var t = e.indexOf('=');
    -1 === t && (t = n);
    var r = t === n ? 0 : 4 - (t % 4);
    return [t, r];
}
(r[45] = 62), (r[95] = 63);
