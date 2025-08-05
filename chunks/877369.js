((t.byteLength = function (e) {
    var t = u(e),
        n = t[0],
        r = t[1];
    return ((n + r) * 3) / 4 - r;
}),
    (t.toByteArray = function (e) {
        var t,
            n,
            l = u(e),
            o = l[0],
            a = l[1],
            c = new i(((o + a) * 3) / 4 - a),
            d = 0,
            s = a > 0 ? o - 4 : o;
        for (n = 0; n < s; n += 4) ((t = (r[e.charCodeAt(n)] << 18) | (r[e.charCodeAt(n + 1)] << 12) | (r[e.charCodeAt(n + 2)] << 6) | r[e.charCodeAt(n + 3)]), (c[d++] = (t >> 16) & 255), (c[d++] = (t >> 8) & 255), (c[d++] = 255 & t));
        return (2 === a && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (c[d++] = 255 & t)), 1 === a && ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)), (c[d++] = (t >> 8) & 255), (c[d++] = 255 & t)), c);
    }),
    (t.fromByteArray = function (e) {
        for (var t, r = e.length, i = r % 3, l = [], o = 0, a = r - i; o < a; o += 16383)
            l.push(
                (function (e, t, r) {
                    for (var i, l = [], o = t; o < r; o += 3) ((i = ((e[o] << 16) & 16711680) + ((e[o + 1] << 8) & 65280) + (255 & e[o + 2])), l.push(n[(i >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]));
                    return l.join('');
                })(e, o, o + 16383 > a ? a : o + 16383)
            );
        return (1 === i ? l.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + '==') : 2 === i && l.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='), l.join(''));
    }));
for (var n = [], r = [], i = 'undefined' != typeof Uint8Array ? Uint8Array : Array, l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', o = 0, a = l.length; o < a; ++o) ((n[o] = l[o]), (r[l.charCodeAt(o)] = o));
function u(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var n = e.indexOf('=');
    -1 === n && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
}
((r[45] = 62), (r[95] = 63));
