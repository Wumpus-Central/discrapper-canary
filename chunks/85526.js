(t.byteLength = function (e) {
    var t = s(e),
        a = t[0],
        n = t[1];
    return ((a + n) * 3) / 4 - n;
}),
    (t.toByteArray = function (e) {
        var t,
            a,
            r = s(e),
            l = r[0],
            o = r[1],
            _ = new i(((l + o) * 3) / 4 - o),
            c = 0,
            d = o > 0 ? l - 4 : l;
        for (a = 0; a < d; a += 4)
            (t =
                (n[e.charCodeAt(a)] << 18) |
                (n[e.charCodeAt(a + 1)] << 12) |
                (n[e.charCodeAt(a + 2)] << 6) |
                n[e.charCodeAt(a + 3)]),
                (_[c++] = (t >> 16) & 255),
                (_[c++] = (t >> 8) & 255),
                (_[c++] = 255 & t);
        return (
            2 === o && ((t = (n[e.charCodeAt(a)] << 2) | (n[e.charCodeAt(a + 1)] >> 4)), (_[c++] = 255 & t)),
            1 === o &&
                ((t = (n[e.charCodeAt(a)] << 10) | (n[e.charCodeAt(a + 1)] << 4) | (n[e.charCodeAt(a + 2)] >> 2)),
                (_[c++] = (t >> 8) & 255),
                (_[c++] = 255 & t)),
            _
        );
    }),
    (t.fromByteArray = function (e) {
        for (var t, n = e.length, i = n % 3, r = [], l = 0, o = n - i; l < o; l += 16383)
            r.push(
                (function (e, t, n) {
                    for (var i, r = [], l = t; l < n; l += 3)
                        (i = ((e[l] << 16) & 0xff0000) + ((e[l + 1] << 8) & 65280) + (255 & e[l + 2])),
                            r.push(a[(i >> 18) & 63] + a[(i >> 12) & 63] + a[(i >> 6) & 63] + a[63 & i]);
                    return r.join("");
                })(e, l, l + 16383 > o ? o : l + 16383),
            );
        return (
            1 === i
                ? r.push(a[(t = e[n - 1]) >> 2] + a[(t << 4) & 63] + "==")
                : 2 === i &&
                  r.push(a[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + a[(t >> 4) & 63] + a[(t << 2) & 63] + "="),
            r.join("")
        );
    });
for (
    var a = [],
        n = [],
        i = "u" > typeof Uint8Array ? Uint8Array : Array,
        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        l = 0,
        o = r.length;
    l < o;
    ++l
)
    (a[l] = r[l]), (n[r.charCodeAt(l)] = l);
function s(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var a = e.indexOf("=");
    -1 === a && (a = t);
    var n = a === t ? 0 : 4 - (a % 4);
    return [a, n];
}
(n[45] = 62), (n[95] = 63);
