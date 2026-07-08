(n.byteLength = function (e) {
    var n = o(e),
        t = n[0],
        a = n[1];
    return ((t + a) * 3) / 4 - a;
}),
    (n.toByteArray = function (e) {
        var n,
            t,
            i = o(e),
            u = i[0],
            s = i[1],
            l = new r(((u + s) * 3) / 4 - s),
            d = 0,
            c = s > 0 ? u - 4 : u;
        for (t = 0; t < c; t += 4)
            (n =
                (a[e.charCodeAt(t)] << 18) |
                (a[e.charCodeAt(t + 1)] << 12) |
                (a[e.charCodeAt(t + 2)] << 6) |
                a[e.charCodeAt(t + 3)]),
                (l[d++] = (n >> 16) & 255),
                (l[d++] = (n >> 8) & 255),
                (l[d++] = 255 & n);
        return (
            2 === s && ((n = (a[e.charCodeAt(t)] << 2) | (a[e.charCodeAt(t + 1)] >> 4)), (l[d++] = 255 & n)),
            1 === s &&
                ((n = (a[e.charCodeAt(t)] << 10) | (a[e.charCodeAt(t + 1)] << 4) | (a[e.charCodeAt(t + 2)] >> 2)),
                (l[d++] = (n >> 8) & 255),
                (l[d++] = 255 & n)),
            l
        );
    }),
    (n.fromByteArray = function (e) {
        for (var n, a = e.length, r = a % 3, i = [], u = 0, s = a - r; u < s; u += 16383)
            i.push(
                (function (e, n, a) {
                    for (var r, i = [], u = n; u < a; u += 3)
                        (r = ((e[u] << 16) & 0xff0000) + ((e[u + 1] << 8) & 65280) + (255 & e[u + 2])),
                            i.push(t[(r >> 18) & 63] + t[(r >> 12) & 63] + t[(r >> 6) & 63] + t[63 & r]);
                    return i.join("");
                })(e, u, u + 16383 > s ? s : u + 16383),
            );
        return (
            1 === r
                ? i.push(t[(n = e[a - 1]) >> 2] + t[(n << 4) & 63] + "==")
                : 2 === r &&
                  i.push(t[(n = (e[a - 2] << 8) + e[a - 1]) >> 10] + t[(n >> 4) & 63] + t[(n << 2) & 63] + "="),
            i.join("")
        );
    });
for (
    var t = [],
        a = [],
        r = "u" > typeof Uint8Array ? Uint8Array : Array,
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        u = 0,
        s = i.length;
    u < s;
    ++u
)
    (t[u] = i[u]), (a[i.charCodeAt(u)] = u);
function o(e) {
    var n = e.length;
    if (n % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var t = e.indexOf("=");
    -1 === t && (t = n);
    var a = t === n ? 0 : 4 - (t % 4);
    return [t, a];
}
(a[45] = 62), (a[95] = 63);
