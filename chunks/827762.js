"use strict";
(t.byteLength = u), (t.toByteArray = d), (t.fromByteArray = p);
for (
    var n = [],
        r = [],
        i = "u" > typeof Uint8Array ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        o = a.length;
    s < o;
    ++s
)
    (n[s] = a[s]), (r[a.charCodeAt(s)] = s);
function l(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    -1 === n && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
}
function u(e) {
    var t = l(e),
        n = t[0],
        r = t[1];
    return ((n + r) * 3) / 4 - r;
}
function c(e, t, n) {
    return ((t + n) * 3) / 4 - n;
}
function d(e) {
    var t,
        n,
        a = l(e),
        s = a[0],
        o = a[1],
        u = new i(c(e, s, o)),
        d = 0,
        _ = o > 0 ? s - 4 : s;
    for (n = 0; n < _; n += 4)
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
}
function _(e) {
    return n[(e >> 18) & 63] + n[(e >> 12) & 63] + n[(e >> 6) & 63] + n[63 & e];
}
function f(e, t, n) {
    for (var r = [], i = t; i < n; i += 3)
        r.push(_(((e[i] << 16) & 0xff0000) + ((e[i + 1] << 8) & 65280) + (255 & e[i + 2])));
    return r.join("");
}
function p(e) {
    for (var t, r = e.length, i = r % 3, a = [], s = 16383, o = 0, l = r - i; o < l; o += s)
        a.push(f(e, o, o + s > l ? l : o + s));
    return (
        1 === i
            ? a.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + "==")
            : 2 === i && a.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="),
        a.join("")
    );
}
(r[45] = 62), (r[95] = 63);
