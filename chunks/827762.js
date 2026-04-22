"use strict";
(t.byteLength = function (e) {
    var t = l(e),
        n = t[0],
        r = t[1];
    return ((n + r) * 3) / 4 - r;
}),
    (t.toByteArray = function (e) {
        var t,
            n,
            s = l(e),
            a = s[0],
            o = s[1],
            u = new i(((a + o) * 3) / 4 - o),
            d = 0,
            c = o > 0 ? a - 4 : a;
        for (n = 0; n < c; n += 4)
            (t =
                (r[e.charCodeAt(n)] << 18) |
                (r[e.charCodeAt(n + 1)] << 12) |
                (r[e.charCodeAt(n + 2)] << 6) |
                r[e.charCodeAt(n + 3)]),
                (u[d++] = (t >> 16) & 255),
                (u[d++] = (t >> 8) & 255),
                (u[d++] = 255 & t);
        return (
            2 === o && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (u[d++] = 255 & t)),
            1 === o &&
                ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)),
                (u[d++] = (t >> 8) & 255),
                (u[d++] = 255 & t)),
            u
        );
    }),
    (t.fromByteArray = function (e) {
        for (var t, r = e.length, i = r % 3, s = [], a = 0, o = r - i; a < o; a += 16383)
            s.push(
                (function (e, t, r) {
                    for (var i, s = [], a = t; a < r; a += 3)
                        (i = ((e[a] << 16) & 0xff0000) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
                            s.push(n[(i >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]);
                    return s.join("");
                })(e, a, a + 16383 > o ? o : a + 16383),
            );
        return (
            1 === i
                ? s.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + "==")
                : 2 === i &&
                  s.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="),
            s.join("")
        );
    });
for (
    var n = [],
        r = [],
        i = "u" > typeof Uint8Array ? Uint8Array : Array,
        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a = 0,
        o = s.length;
    a < o;
    ++a
)
    (n[a] = s[a]), (r[s.charCodeAt(a)] = a);
function l(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    -1 === n && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
}
(r[45] = 62), (r[95] = 63);
