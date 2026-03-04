"use strict";
(t.byteLength = function (e) {
    var t = o(e),
        a = t[0],
        n = t[1];
    return ((a + n) * 3) / 4 - n;
}),
    (t.toByteArray = function (e) {
        var t,
            a,
            i = o(e),
            s = i[0],
            l = i[1],
            c = new r(((s + l) * 3) / 4 - l),
            _ = 0,
            d = l > 0 ? s - 4 : s;
        for (a = 0; a < d; a += 4)
            (t =
                (n[e.charCodeAt(a)] << 18) |
                (n[e.charCodeAt(a + 1)] << 12) |
                (n[e.charCodeAt(a + 2)] << 6) |
                n[e.charCodeAt(a + 3)]),
                (c[_++] = (t >> 16) & 255),
                (c[_++] = (t >> 8) & 255),
                (c[_++] = 255 & t);
        return (
            2 === l && ((t = (n[e.charCodeAt(a)] << 2) | (n[e.charCodeAt(a + 1)] >> 4)), (c[_++] = 255 & t)),
            1 === l &&
                ((t = (n[e.charCodeAt(a)] << 10) | (n[e.charCodeAt(a + 1)] << 4) | (n[e.charCodeAt(a + 2)] >> 2)),
                (c[_++] = (t >> 8) & 255),
                (c[_++] = 255 & t)),
            c
        );
    }),
    (t.fromByteArray = function (e) {
        for (var t, n = e.length, r = n % 3, i = [], s = 0, l = n - r; s < l; s += 16383)
            i.push(
                (function (e, t, n) {
                    for (var r, i = [], s = t; s < n; s += 3)
                        (r = ((e[s] << 16) & 0xff0000) + ((e[s + 1] << 8) & 65280) + (255 & e[s + 2])),
                            i.push(a[(r >> 18) & 63] + a[(r >> 12) & 63] + a[(r >> 6) & 63] + a[63 & r]);
                    return i.join("");
                })(e, s, s + 16383 > l ? l : s + 16383),
            );
        return (
            1 === r
                ? i.push(a[(t = e[n - 1]) >> 2] + a[(t << 4) & 63] + "==")
                : 2 === r &&
                  i.push(a[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + a[(t >> 4) & 63] + a[(t << 2) & 63] + "="),
            i.join("")
        );
    });
for (
    var a = [],
        n = [],
        r = "u" > typeof Uint8Array ? Uint8Array : Array,
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        l = i.length;
    s < l;
    ++s
)
    (a[s] = i[s]), (n[i.charCodeAt(s)] = s);
function o(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var a = e.indexOf("=");
    -1 === a && (a = t);
    var n = a === t ? 0 : 4 - (a % 4);
    return [a, n];
}
(n[45] = 62), (n[95] = 63);
