((t.byteLength = function (e) {
    var t = u(e),
        n = t[0],
        i = t[1];
    return ((n + i) * 3) / 4 - i;
}),
    (t.toByteArray = function (e) {
        var t,
            n,
            a = u(e),
            l = a[0],
            o = a[1],
            c = new r(((l + o) * 3) / 4 - o),
            s = 0,
            d = o > 0 ? l - 4 : l;
        for (n = 0; n < d; n += 4) ((t = (i[e.charCodeAt(n)] << 18) | (i[e.charCodeAt(n + 1)] << 12) | (i[e.charCodeAt(n + 2)] << 6) | i[e.charCodeAt(n + 3)]), (c[s++] = (t >> 16) & 255), (c[s++] = (t >> 8) & 255), (c[s++] = 255 & t));
        return (2 === o && ((t = (i[e.charCodeAt(n)] << 2) | (i[e.charCodeAt(n + 1)] >> 4)), (c[s++] = 255 & t)), 1 === o && ((t = (i[e.charCodeAt(n)] << 10) | (i[e.charCodeAt(n + 1)] << 4) | (i[e.charCodeAt(n + 2)] >> 2)), (c[s++] = (t >> 8) & 255), (c[s++] = 255 & t)), c);
    }),
    (t.fromByteArray = function (e) {
        for (var t, i = e.length, r = i % 3, a = [], l = 0, o = i - r; l < o; l += 16383)
            a.push(
                (function (e, t, i) {
                    for (var r, a = [], l = t; l < i; l += 3) ((r = ((e[l] << 16) & 16711680) + ((e[l + 1] << 8) & 65280) + (255 & e[l + 2])), a.push(n[(r >> 18) & 63] + n[(r >> 12) & 63] + n[(r >> 6) & 63] + n[63 & r]));
                    return a.join('');
                })(e, l, l + 16383 > o ? o : l + 16383)
            );
        return (1 === r ? a.push(n[(t = e[i - 1]) >> 2] + n[(t << 4) & 63] + '==') : 2 === r && a.push(n[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='), a.join(''));
    }));
for (var n = [], i = [], r = 'undefined' != typeof Uint8Array ? Uint8Array : Array, a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', l = 0, o = a.length; l < o; ++l) ((n[l] = a[l]), (i[a.charCodeAt(l)] = l));
function u(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var n = e.indexOf('=');
    -1 === n && (n = t);
    var i = n === t ? 0 : 4 - (n % 4);
    return [n, i];
}
((i[45] = 62), (i[95] = 63));
