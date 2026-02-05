"use strict";
(t.byteLength = function (e) {
    var t = o(e),
        n = t[0],
        r = t[1];
    return ((n + r) * 3) / 4 - r;
}),
    (t.toByteArray = function (e) {
        var t,
            n,
            s = o(e),
            i = s[0],
            l = s[1],
            c = new a(((i + l) * 3) / 4 - l),
            d = 0,
            u = l > 0 ? i - 4 : i;
        for (n = 0; n < u; n += 4)
            (t =
                (r[e.charCodeAt(n)] << 18) |
                (r[e.charCodeAt(n + 1)] << 12) |
                (r[e.charCodeAt(n + 2)] << 6) |
                r[e.charCodeAt(n + 3)]),
                (c[d++] = (t >> 16) & 255),
                (c[d++] = (t >> 8) & 255),
                (c[d++] = 255 & t);
        return (
            2 === l && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (c[d++] = 255 & t)),
            1 === l &&
                ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)),
                (c[d++] = (t >> 8) & 255),
                (c[d++] = 255 & t)),
            c
        );
    }),
    (t.fromByteArray = function (e) {
        for (var t, r = e.length, a = r % 3, s = [], i = 0, l = r - a; i < l; i += 16383)
            s.push(
                (function (e, t, r) {
                    for (var a, s = [], i = t; i < r; i += 3)
                        (a = ((e[i] << 16) & 0xff0000) + ((e[i + 1] << 8) & 65280) + (255 & e[i + 2])),
                            s.push(n[(a >> 18) & 63] + n[(a >> 12) & 63] + n[(a >> 6) & 63] + n[63 & a]);
                    return s.join("");
                })(e, i, i + 16383 > l ? l : i + 16383),
            );
        return (
            1 === a
                ? s.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + "==")
                : 2 === a &&
                  s.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="),
            s.join("")
        );
    });
for (
    var n = [],
        r = [],
        a = "u" > typeof Uint8Array ? Uint8Array : Array,
        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        i = 0,
        l = s.length;
    i < l;
    ++i
)
    (n[i] = s[i]), (r[s.charCodeAt(i)] = i);
function o(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    -1 === n && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
}
(r[45] = 62), (r[95] = 63);
