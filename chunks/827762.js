((t.byteLength = function (e) {
    var t = l(e),
        r = t[0],
        n = t[1];
    return ((r + n) * 3) / 4 - n;
}),
    (t.toByteArray = function (e) {
        var t,
            r,
            o = l(e),
            a = o[0],
            s = o[1],
            u = new i(((a + s) * 3) / 4 - s),
            c = 0,
            f = s > 0 ? a - 4 : a;
        for (r = 0; r < f; r += 4)
            ((t =
                (n[e.charCodeAt(r)] << 18) |
                (n[e.charCodeAt(r + 1)] << 12) |
                (n[e.charCodeAt(r + 2)] << 6) |
                n[e.charCodeAt(r + 3)]),
                (u[c++] = (t >> 16) & 255),
                (u[c++] = (t >> 8) & 255),
                (u[c++] = 255 & t));
        return (
            2 === s && ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)), (u[c++] = 255 & t)),
            1 === s &&
                ((t = (n[e.charCodeAt(r)] << 10) | (n[e.charCodeAt(r + 1)] << 4) | (n[e.charCodeAt(r + 2)] >> 2)),
                (u[c++] = (t >> 8) & 255),
                (u[c++] = 255 & t)),
            u
        );
    }),
    (t.fromByteArray = function (e) {
        for (var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i; a < s; a += 16383)
            o.push(
                (function (e, t, n) {
                    for (var i, o = [], a = t; a < n; a += 3)
                        ((i = ((e[a] << 16) & 0xff0000) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
                            o.push(r[(i >> 18) & 63] + r[(i >> 12) & 63] + r[(i >> 6) & 63] + r[63 & i]));
                    return o.join("");
                })(e, a, a + 16383 > s ? s : a + 16383),
            );
        return (
            1 === i
                ? o.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + "==")
                : 2 === i &&
                  o.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="),
            o.join("")
        );
    }));
for (
    var r = [],
        n = [],
        i = "u" > typeof Uint8Array ? Uint8Array : Array,
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a = 0,
        s = o.length;
    a < s;
    ++a
)
    ((r[a] = o[a]), (n[o.charCodeAt(a)] = a));
function l(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var r = e.indexOf("=");
    -1 === r && (r = t);
    var n = r === t ? 0 : 4 - (r % 4);
    return [r, n];
}
((n[45] = 62), (n[95] = 63));
