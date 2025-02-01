var t = 4,
    n = 0.001,
    i = 1e-7,
    r = 10,
    a = 11,
    s = 0.1,
    o = 'function' == typeof Float32Array;
function l(e, t) {
    return 1 - 3 * t + 3 * e;
}
function u(e, t) {
    return 3 * t - 6 * e;
}
function c(e) {
    return 3 * e;
}
function d(e, t, n) {
    return ((l(t, n) * e + u(t, n)) * e + c(t)) * e;
}
function f(e, t, n) {
    return 3 * l(t, n) * e * e + 2 * u(t, n) * e + c(t);
}
function _(e, t, n, a, s) {
    var o,
        l,
        u = 0;
    do (o = d((l = t + (n - t) / 2), a, s) - e) > 0 ? (n = l) : (t = l);
    while (Math.abs(o) > i && ++u < r);
    return l;
}
function p(e, n, i, r) {
    for (var a = 0; a < t; ++a) {
        var s = f(n, i, r);
        if (0 === s) break;
        var o = d(n, i, r) - e;
        n -= o / s;
    }
    return n;
}
e.exports = function (e, t, i, r) {
    if (!(0 <= e && e <= 1 && 0 <= i && i <= 1)) throw Error('bezier x values must be in [0, 1] range');
    var l = o ? new Float32Array(a) : Array(a);
    if (e !== t || i !== r) for (var u = 0; u < a; ++u) l[u] = d(u * s, e, i);
    function c(t) {
        for (var r = 0, o = 1, u = a - 1; o !== u && l[o] <= t; ++o) r += s;
        var c = r + ((t - l[--o]) / (l[o + 1] - l[o])) * s,
            d = f(c, e, i);
        return d >= n ? p(t, c, e, i) : 0 === d ? c : _(t, r, r + s, e, i);
    }
    return function (n) {
        return e === t && i === r ? n : 0 === n ? 0 : 1 === n ? 1 : d(c(n), t, r);
    };
};
