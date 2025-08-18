(t.byteLength = function (e) {
    var t = c(e),
        r = t[0],
        n = t[1];
    return ((r + n) * 3) / 4 - n;
}),
    (t.toByteArray = function (e) {
        var t,
            r,
            i = c(e),
            a = i[0],
            s = i[1],
            l = new o(((a + s) * 3) / 4 - s),
            d = 0,
            h = s > 0 ? a - 4 : a;
        for (r = 0; r < h; r += 4)
            (t =
                (n[e.charCodeAt(r)] << 18) |
                (n[e.charCodeAt(r + 1)] << 12) |
                (n[e.charCodeAt(r + 2)] << 6) |
                n[e.charCodeAt(r + 3)]),
                (l[d++] = (t >> 16) & 255),
                (l[d++] = (t >> 8) & 255),
                (l[d++] = 255 & t);
        return (
            2 === s && ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)), (l[d++] = 255 & t)),
            1 === s &&
                ((t = (n[e.charCodeAt(r)] << 10) | (n[e.charCodeAt(r + 1)] << 4) | (n[e.charCodeAt(r + 2)] >> 2)),
                (l[d++] = (t >> 8) & 255),
                (l[d++] = 255 & t)),
            l
        );
    }),
    (t.fromByteArray = function (e) {
        for (var t, n = e.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383)
            i.push(
                (function (e, t, n) {
                    for (var o, i = [], a = t; a < n; a += 3)
                        (o = ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
                            i.push(r[(o >> 18) & 63] + r[(o >> 12) & 63] + r[(o >> 6) & 63] + r[63 & o]);
                    return i.join("");
                })(e, a, a + 16383 > s ? s : a + 16383),
            );
        return (
            1 === o
                ? i.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + "==")
                : 2 === o &&
                  i.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="),
            i.join("")
        );
    });
for (
    var r = [],
        n = [],
        o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a = 0,
        s = i.length;
    a < s;
    ++a
)
    (r[a] = i[a]), (n[i.charCodeAt(a)] = a);
function c(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var r = e.indexOf("=");
    -1 === r && (r = t);
    var n = r === t ? 0 : 4 - (r % 4);
    return [r, n];
}
(n[45] = 62), (n[95] = 63);
