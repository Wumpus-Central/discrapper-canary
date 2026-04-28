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
            a = o(e),
            l = a[0],
            s = a[1],
            d = new i(((l + s) * 3) / 4 - s),
            c = 0,
            u = s > 0 ? l - 4 : l;
        for (n = 0; n < u; n += 4)
            (t =
                (r[e.charCodeAt(n)] << 18) |
                (r[e.charCodeAt(n + 1)] << 12) |
                (r[e.charCodeAt(n + 2)] << 6) |
                r[e.charCodeAt(n + 3)]),
                (d[c++] = (t >> 16) & 255),
                (d[c++] = (t >> 8) & 255),
                (d[c++] = 255 & t);
        return (
            2 === s && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (d[c++] = 255 & t)),
            1 === s &&
                ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)),
                (d[c++] = (t >> 8) & 255),
                (d[c++] = 255 & t)),
            d
        );
    }),
    (t.fromByteArray = function (e) {
        for (var t, r = e.length, i = r % 3, a = [], l = 0, s = r - i; l < s; l += 16383)
            a.push(
                (function (e, t, r) {
                    for (var i, a = [], l = t; l < r; l += 3)
                        (i = ((e[l] << 16) & 0xff0000) + ((e[l + 1] << 8) & 65280) + (255 & e[l + 2])),
                            a.push(n[(i >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]);
                    return a.join("");
                })(e, l, l + 16383 > s ? s : l + 16383),
            );
        return (
            1 === i
                ? a.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + "==")
                : 2 === i &&
                  a.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="),
            a.join("")
        );
    });
for (
    var n = [],
        r = [],
        i = "u" > typeof Uint8Array ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        l = 0,
        s = a.length;
    l < s;
    ++l
)
    (n[l] = a[l]), (r[a.charCodeAt(l)] = l);
function o(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    -1 === n && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
}
(r[45] = 62), (r[95] = 63);
