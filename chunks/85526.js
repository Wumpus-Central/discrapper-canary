(t.byteLength = function (e) {
    var t = o(e),
        n = t[0],
        i = t[1];
    return ((n + i) * 3) / 4 - i;
}),
    (t.toByteArray = function (e) {
        var t,
            n,
            l = o(e),
            r = l[0],
            a = l[1],
            c = new s(((r + a) * 3) / 4 - a),
            d = 0,
            u = a > 0 ? r - 4 : r;
        for (n = 0; n < u; n += 4)
            (t =
                (i[e.charCodeAt(n)] << 18) |
                (i[e.charCodeAt(n + 1)] << 12) |
                (i[e.charCodeAt(n + 2)] << 6) |
                i[e.charCodeAt(n + 3)]),
                (c[d++] = (t >> 16) & 255),
                (c[d++] = (t >> 8) & 255),
                (c[d++] = 255 & t);
        return (
            2 === a && ((t = (i[e.charCodeAt(n)] << 2) | (i[e.charCodeAt(n + 1)] >> 4)), (c[d++] = 255 & t)),
            1 === a &&
                ((t = (i[e.charCodeAt(n)] << 10) | (i[e.charCodeAt(n + 1)] << 4) | (i[e.charCodeAt(n + 2)] >> 2)),
                (c[d++] = (t >> 8) & 255),
                (c[d++] = 255 & t)),
            c
        );
    }),
    (t.fromByteArray = function (e) {
        for (var t, i = e.length, s = i % 3, l = [], r = 0, a = i - s; r < a; r += 16383)
            l.push(
                (function (e, t, i) {
                    for (var s, l = [], r = t; r < i; r += 3)
                        (s = ((e[r] << 16) & 0xff0000) + ((e[r + 1] << 8) & 65280) + (255 & e[r + 2])),
                            l.push(n[(s >> 18) & 63] + n[(s >> 12) & 63] + n[(s >> 6) & 63] + n[63 & s]);
                    return l.join("");
                })(e, r, r + 16383 > a ? a : r + 16383),
            );
        return (
            1 === s
                ? l.push(n[(t = e[i - 1]) >> 2] + n[(t << 4) & 63] + "==")
                : 2 === s &&
                  l.push(n[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="),
            l.join("")
        );
    });
for (
    var n = [],
        i = [],
        s = "u" > typeof Uint8Array ? Uint8Array : Array,
        l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        r = 0,
        a = l.length;
    r < a;
    ++r
)
    (n[r] = l[r]), (i[l.charCodeAt(r)] = r);

function o(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    -1 === n && (n = t);
    var i = n === t ? 0 : 4 - (n % 4);
    return [n, i];
}
(i[45] = 62), (i[95] = 63);
