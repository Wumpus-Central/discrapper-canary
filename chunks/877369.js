((t.byteLength = function (e) {
    var t = s(e),
        n = t[0],
        l = t[1];
    return ((n + l) * 3) / 4 - l;
}),
    (t.toByteArray = function (e) {
        var t,
            n,
            r = s(e),
            o = r[0],
            a = r[1],
            c = new i(((o + a) * 3) / 4 - a),
            u = 0,
            d = a > 0 ? o - 4 : o;
        for (n = 0; n < d; n += 4) ((t = (l[e.charCodeAt(n)] << 18) | (l[e.charCodeAt(n + 1)] << 12) | (l[e.charCodeAt(n + 2)] << 6) | l[e.charCodeAt(n + 3)]), (c[u++] = (t >> 16) & 255), (c[u++] = (t >> 8) & 255), (c[u++] = 255 & t));
        return (2 === a && ((t = (l[e.charCodeAt(n)] << 2) | (l[e.charCodeAt(n + 1)] >> 4)), (c[u++] = 255 & t)), 1 === a && ((t = (l[e.charCodeAt(n)] << 10) | (l[e.charCodeAt(n + 1)] << 4) | (l[e.charCodeAt(n + 2)] >> 2)), (c[u++] = (t >> 8) & 255), (c[u++] = 255 & t)), c);
    }),
    (t.fromByteArray = function (e) {
        for (var t, l = e.length, i = l % 3, r = [], o = 0, a = l - i; o < a; o += 16383)
            r.push(
                (function (e, t, l) {
                    for (var i, r = [], o = t; o < l; o += 3) ((i = ((e[o] << 16) & 16711680) + ((e[o + 1] << 8) & 65280) + (255 & e[o + 2])), r.push(n[(i >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]));
                    return r.join('');
                })(e, o, o + 16383 > a ? a : o + 16383)
            );
        return (1 === i ? r.push(n[(t = e[l - 1]) >> 2] + n[(t << 4) & 63] + '==') : 2 === i && r.push(n[(t = (e[l - 2] << 8) + e[l - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='), r.join(''));
    }));
for (var n = [], l = [], i = 'undefined' != typeof Uint8Array ? Uint8Array : Array, r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', o = 0, a = r.length; o < a; ++o) ((n[o] = r[o]), (l[r.charCodeAt(o)] = o));
function s(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var n = e.indexOf('=');
    -1 === n && (n = t);
    var l = n === t ? 0 : 4 - (n % 4);
    return [n, l];
}
((l[45] = 62), (l[95] = 63));
