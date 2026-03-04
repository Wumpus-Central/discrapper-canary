(t.byteLength = function (e) {
    var t = s(e),
        n = t[0],
        i = t[1];
    return ((n + i) * 3) / 4 - i;
}),
    (t.toByteArray = function (e) {
        var t,
            n,
            l = s(e),
            a = l[0],
            o = l[1],
            d = new r(((a + o) * 3) / 4 - o),
            u = 0,
            c = o > 0 ? a - 4 : a;
        for (n = 0; n < c; n += 4)
            (t =
                (i[e.charCodeAt(n)] << 18) |
                (i[e.charCodeAt(n + 1)] << 12) |
                (i[e.charCodeAt(n + 2)] << 6) |
                i[e.charCodeAt(n + 3)]),
                (d[u++] = (t >> 16) & 255),
                (d[u++] = (t >> 8) & 255),
                (d[u++] = 255 & t);
        return (
            2 === o && ((t = (i[e.charCodeAt(n)] << 2) | (i[e.charCodeAt(n + 1)] >> 4)), (d[u++] = 255 & t)),
            1 === o &&
                ((t = (i[e.charCodeAt(n)] << 10) | (i[e.charCodeAt(n + 1)] << 4) | (i[e.charCodeAt(n + 2)] >> 2)),
                (d[u++] = (t >> 8) & 255),
                (d[u++] = 255 & t)),
            d
        );
    }),
    (t.fromByteArray = function (e) {
        for (var t, i = e.length, r = i % 3, l = [], a = 0, o = i - r; a < o; a += 16383)
            l.push(
                (function (e, t, i) {
                    for (var r, l = [], a = t; a < i; a += 3)
                        (r = ((e[a] << 16) & 0xff0000) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
                            l.push(n[(r >> 18) & 63] + n[(r >> 12) & 63] + n[(r >> 6) & 63] + n[63 & r]);
                    return l.join("");
                })(e, a, a + 16383 > o ? o : a + 16383),
            );
        return (
            1 === r
                ? l.push(n[(t = e[i - 1]) >> 2] + n[(t << 4) & 63] + "==")
                : 2 === r &&
                  l.push(n[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="),
            l.join("")
        );
    });
for (
    var n = [],
        i = [],
        r = "u" > typeof Uint8Array ? Uint8Array : Array,
        l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a = 0,
        o = l.length;
    a < o;
    ++a
)
    (n[a] = l[a]), (i[l.charCodeAt(a)] = a);
function s(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    -1 === n && (n = t);
    var i = n === t ? 0 : 4 - (n % 4);
    return [n, i];
}
(i[45] = 62), (i[95] = 63);
