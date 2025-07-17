((t.byteLength = function (e) {
    var t = a(e),
        n = t[0],
        r = t[1];
    return ((n + r) * 3) / 4 - r;
}),
    (t.toByteArray = function (e) {
        var t,
            n,
            i = a(e),
            o = i[0],
            u = i[1],
            c = new l(((o + u) * 3) / 4 - u),
            d = 0,
            s = u > 0 ? o - 4 : o;
        for (n = 0; n < s; n += 4) ((t = (r[e.charCodeAt(n)] << 18) | (r[e.charCodeAt(n + 1)] << 12) | (r[e.charCodeAt(n + 2)] << 6) | r[e.charCodeAt(n + 3)]), (c[d++] = (t >> 16) & 255), (c[d++] = (t >> 8) & 255), (c[d++] = 255 & t));
        return (2 === u && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (c[d++] = 255 & t)), 1 === u && ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)), (c[d++] = (t >> 8) & 255), (c[d++] = 255 & t)), c);
    }),
    (t.fromByteArray = function (e) {
        for (var t, r = e.length, l = r % 3, i = [], o = 0, u = r - l; o < u; o += 16383)
            i.push(
                (function (e, t, r) {
                    for (var l, i = [], o = t; o < r; o += 3) ((l = ((e[o] << 16) & 16711680) + ((e[o + 1] << 8) & 65280) + (255 & e[o + 2])), i.push(n[(l >> 18) & 63] + n[(l >> 12) & 63] + n[(l >> 6) & 63] + n[63 & l]));
                    return i.join('');
                })(e, o, o + 16383 > u ? u : o + 16383)
            );
        return (1 === l ? i.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + '==') : 2 === l && i.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='), i.join(''));
    }));
for (var n = [], r = [], l = 'undefined' != typeof Uint8Array ? Uint8Array : Array, i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', o = 0, u = i.length; o < u; ++o) ((n[o] = i[o]), (r[i.charCodeAt(o)] = o));
function a(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var n = e.indexOf('=');
    -1 === n && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
}
((r[45] = 62), (r[95] = 63));
