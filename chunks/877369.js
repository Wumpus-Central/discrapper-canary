(t.byteLength = function (e) {
    var t = s(e),
        n = t[0],
        r = t[1];
    return ((n + r) * 3) / 4 - r;
}),
    (t.toByteArray = function (e) {
        var t,
            n,
            i = s(e),
            a = i[0],
            c = i[1],
            d = new o(((a + c) * 3) / 4 - c),
            l = 0,
            p = c > 0 ? a - 4 : a;
        for (n = 0; n < p; n += 4) (t = (r[e.charCodeAt(n)] << 18) | (r[e.charCodeAt(n + 1)] << 12) | (r[e.charCodeAt(n + 2)] << 6) | r[e.charCodeAt(n + 3)]), (d[l++] = (t >> 16) & 255), (d[l++] = (t >> 8) & 255), (d[l++] = 255 & t);
        return 2 === c && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (d[l++] = 255 & t)), 1 === c && ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)), (d[l++] = (t >> 8) & 255), (d[l++] = 255 & t)), d;
    }),
    (t.fromByteArray = function (e) {
        for (var t, r = e.length, o = r % 3, i = [], a = 0, c = r - o; a < c; a += 16383)
            i.push(
                (function (e, t, r) {
                    for (var o, i = [], a = t; a < r; a += 3) (o = ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])), i.push(n[(o >> 18) & 63] + n[(o >> 12) & 63] + n[(o >> 6) & 63] + n[63 & o]);
                    return i.join('');
                })(e, a, a + 16383 > c ? c : a + 16383)
            );
        return 1 === o ? i.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + '==') : 2 === o && i.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='), i.join('');
    });
for (var n = [], r = [], o = 'undefined' != typeof Uint8Array ? Uint8Array : Array, i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', a = 0, c = i.length; a < c; ++a) (n[a] = i[a]), (r[i.charCodeAt(a)] = a);
function s(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var n = e.indexOf('=');
    -1 === n && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
}
(r[45] = 62), (r[95] = 63);
